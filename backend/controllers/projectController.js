const Project = require('../models/Project');
const { validateProject } = require('../utils/validation');

exports.createProject = async (req, res) => {
  try {
    const { error } = validateProject(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const result = await Project.create(req.body);
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      id: result.insertId
    });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ error: 'Failed to create project' });
  }
};

exports.getAllProjects = async (req, res) => {
  try {
    const projects = await Project.getAll();
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.getById(req.params.id);
    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({ error: 'Failed to fetch project' });
  }
};

exports.updateProject = async (req, res) => {
  try {
    const { error } = validateProject(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    await Project.update(req.params.id, req.body);
    res.status(200).json({
      success: true,
      message: 'Project updated successfully'
    });
  } catch (error) {
    console.error('Error updating project:', error);
    res.status(500).json({ error: 'Failed to update project' });
  }
};

exports.deleteProject = async (req, res) => {
  try {
    await Project.delete(req.params.id);
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete project' });
  }
};
