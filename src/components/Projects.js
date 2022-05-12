import projectsData from '../data/projectList.json'

const Projects = () => {
  const displayProjects = projectsData.map(
    (project)=>{
      return (
        <tr key={project.name}>
          <td>{project.name}</td>
          <td>{project.description}</td>
          <td><a href={project.repository}>{project.repository}</a></td>
        </tr>
      )
    }
  )
  return (
    <div>
      <p>School Projects</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Repository</th>
          </tr>
        </thead>
        <tbody>
          {displayProjects}
        </tbody>
      </table>
    </div>
  )
}

export default Projects;