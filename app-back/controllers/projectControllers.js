
const Project = require('../models/projectModel');


exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find();
        res.status(200).json(projects);
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};


exports.createProject = async (req, res) => {
    const { title, description, issues, resolved, comment, progress } = req.body;

    try {
        const newProject = new Project({ title, description, issues, resolved, comment, progress });
        await newProject.save();
        res.status(201).json({ message: 'Project created successfully', project: newProject });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};


exports.updateProject = async (req, res) => {
    const { id } = req.params;
    const { title, description, issues, resolved, comment, progress } = req.body;

    try {
        const project = await Project.findByIdAndUpdate(
            id,
            { title, description, issues, resolved, comment, progress },
            { new: true }
        );
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project updated successfully', project });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};


exports.deleteProject = async (req, res) => {
    const { id } = req.params;

    try {
        const project = await Project.findByIdAndDelete(id);
        if (!project) {
            return res.status(404).json({ message: 'Project not found' });
        }
        res.status(200).json({ message: 'Project deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Server error: ' + error.message });
    }
};
