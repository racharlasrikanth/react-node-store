const mongoose = require('mongoose');

const schemaOptions = {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' },
};

const StoreProductSchema = new mongoose.Schema({
    projectName: {
        type: String,
        required: true,
    },
    url: {
        type: String,
        required: true,
    },
    technologies: {
        type: Array,
        required: true,
    },
    githubUrl: {
        type: String,
        required: true,
    },
    thumbnail: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    featured: {
        type: Boolean,
        default: false,
    },
    description: {
        type: String,
        default: "Hi There, I'm Srikanth and I am Front-End Web Developer. It's been 2 years, I'm working as a web developer. I have developed many website and also sharing my knowledge to college students."
    }
}, schemaOptions);

module.exports = mongoose.model('StoreProduct', StoreProductSchema)