import React, {useContext, useState} from 'react'
import GithubContext from '../context/github/githubContext'
import AlertContext from '../context/alert/alertContext'


const Search = () => {

    const {searchUsers,clearUsers,users} =useContext (GithubContext)
    const {setAlert} = useContext (AlertContext)

    const [keyword,setKeyword] = useState('')
  
const onChange=(e) => {
    setKeyword(e.target.value);
}



const onSubmit = (e)=> {
    e.preventDefault();

    if (keyword === '') {
        setAlert('Lütfen Bir anahtar kelime gir amk', 'danger')
    } else {
        searchUsers(keyword);
        setKeyword('');
    }

}


    return (
        <div className="container my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                    <input className="form-control" value={keyword} type='text' onChange={onChange} />
                    <div className="input-group-append">
                        <button type='submit' className='btn btn-dark'> Search</button>
                    </div>
                </div>
            </form>

            {
               users.length>0 && <button onClick={clearUsers} className="btn btn-secondary d-grid btn-block btn-sm mt-2"> Clear Results </button>
            }
        </div>
    )

}

export default Search