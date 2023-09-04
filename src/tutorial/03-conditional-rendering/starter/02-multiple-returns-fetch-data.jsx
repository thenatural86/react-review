import { useEffect, useState } from 'react'
const url = 'https://api.github.com/users/QuincyLarson'

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url)
        const user = await response.json()
        setUser(user)
      } catch (error) {
        console.log(error)
      }
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      <h2>Fetch Data </h2>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div>
          <img src={user.avatar_url} alt={user.name} />
          <h2>{user.name}</h2>
          <h4>Works{user.company}</h4>
          <h5>{user.bio}</h5>
        </div>
      )}
    </>
  )
}
export default MultipleReturnsFetchData
