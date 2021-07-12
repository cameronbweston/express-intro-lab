export { 
	find
}

const favArtists = [
  {name: 'Phoebe Bridgers', done: true, _id: 125223},
  {name: 'John Mayer', done: false, _id: 127904},
  {name: 'Monsune', done: false, _id: 139608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the todos
    if (Object.keys(conditions).length === 0) return callback(null, favArtists)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}