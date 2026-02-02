import './App.css'

function App() {
  const studentName: string = "KEVIN AMISTAD"
  const course: string = "BSIT - IDA-4"
  const isEnrolled: boolean = true
  const students: string[] = ["Aclibon", "Bumatay", "Bulsio"]
  const subjects: string[] = [
    {id: 1, name: "aptech"},
    {id: 2, name: "aptech2"},
    {id: 3, name: "aptech3"}
  ]
  

  return (
    <>
      <h1>{studentName}</h1>
      <p>{course}</p>
      <p>{isEnrolled ? "Welcome to University of Baguio!" : "Please enroll first"}</p>
      <ul>
      {students.map((students, index) => (
      <li key={index}>{students}</li>
      ))}
      </ul>
      <ul>
      {subjects.map((subject, index) => (
      <li key={index}>{subject.id} - {subject.name}</li>
      ))}
      </ul>
    </>
  )
}

export default App
