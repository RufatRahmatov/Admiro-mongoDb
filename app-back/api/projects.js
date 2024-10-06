import connectDB from '../db/connectDb';
import Project from '../models/projectModel';

export default async function handler(req, res) {
    await connectDB();

    const { method } = req;

    switch (method) {
        case 'GET':
            try {
                const projects = await Project.find({});
                res.status(200).json({ success: true, data: projects });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Server Error' });
            }
            break;

        case 'POST':
            try {
                const project = new Project(req.body);
                await project.save();
                res.status(201).json({ success: true, data: project });
            } catch (error) {
                res.status(400).json({ success: false, message: 'Error adding project' });
            }
            break;

        case 'PUT':
            try {
                const { id } = req.query;

                const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
                    new: true,
                    runValidators: true,
                });

                if (!updatedProject) {
                    return res.status(404).json({ success: false, message: 'Project not found' });
                }

                res.status(200).json({ success: true, data: updatedProject });
            } catch (error) {
                res.status(400).json({ success: false, message: 'Error updating project' });
            }
            break;

        case 'DELETE':
            try {
                const { id } = req.query;

                const deletedProject = await Project.findByIdAndDelete(id);

                if (!deletedProject) {
                    return res.status(404).json({ success: false, message: 'Project not found' });
                }

                res.status(200).json({ success: true, message: 'Project deleted' });
            } catch (error) {
                res.status(500).json({ success: false, message: 'Error deleting project' });
            }
            break;

        default:
            res.status(405).json({ success: false, message: 'Method Not Allowed' });
            break;
    }
}
