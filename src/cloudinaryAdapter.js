import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
})

export const cloudinaryAdapter = () => {
  return {
    name: 'cloudinary-custom-adapter',
    
    handleUpload: async ({ file }) => {
      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: 'foundation-media',
            public_id: file.filename.replace(/\.[^/.]+$/, ""), 
          },
          (error, result) => {
            if (error) return reject(error)
            file.url = result.secure_url
            resolve()
          }
        )
        uploadStream.end(file.buffer)
      })
    },

    handleDelete: async ({ filename }) => {
      const publicId = `foundation-media/${filename.replace(/\.[^/.]+$/, "")}`
      try {
        await cloudinary.uploader.destroy(publicId)
      } catch (error) {
        console.error('Failed to clear file from Cloudinary:', error)
      }
    },

    generateFileURL: ({ file }) => file.url || '',

    // FIX: Add staticHandler to intercept internal endpoint calls and redirect them to Cloudinary
    staticHandler: async (req, { params }) => {
      try {
        const { filename } = req.routeParams || {};
        if (!filename) return new Response('Not Found', { status: 404 });

        // Generate the clean public ID matching your upload folder structure
        const publicId = `foundation-media/${filename.replace(/\.[^/.]+$/, "")}`;
        
        // Construct the direct public URL pointing to Cloudinary
        const cloudUrl = cloudinary.url(publicId, { secure: true });

        // Send a 302 Redirect to the browser to fetch it from the cloud instead
        return Response.redirect(cloudUrl, 302);
      } catch (error) {
        return new Response('Internal Server Error', { status: 500 });
      }
    }
  }
}