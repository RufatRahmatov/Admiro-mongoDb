
const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    issues: { type: Number, required: true },
    resolved: { type: Number, required: true },
    comment: { type: Number, required: true },
    progress: { type: Number, required: true }
});

const Project = mongoose.model('Project', projectSchema);

module.exports = Project;
