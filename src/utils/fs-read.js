import axios from 'axios'

// const fsRead = (file, callback) => {
//   fs.readFile(file.path, 'utf8', (err, data) => {
//     if (err) {
//       console.error(err)
//       callback(err, null)
//       return
//     }
//     try {
//       const jsonData = JSON.parse(data)
//       callback(null, jsonData)
//     } catch (parseError) {
//       console.error('Error parsing JSON:', parseError)
//       callback(parseError, null)
//     }
//   })
// }

const readFile = async (path) => {
  try {
    const response = await axios.get(path)
    const data = response.data
    console.log(data)
    return data
  } catch (error) {
    console.error('Error reading file:', error)
    throw error
  }
}

export default readFile
