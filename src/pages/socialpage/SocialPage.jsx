import { useContext } from 'react';
import { FaBeer, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate } from 'react-router-dom';
const SocialPage = () => {
 const {googleLogin,gitHubLogin} = useContext(AuthContext)
    const handleGoogle =()=>{
        googleLogin()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>console.log(error))
    }
    const handleGitHubLogin =()=>{
        gitHubLogin()
        .then(result =>{
          Navigate(from)
          console.log(result.user)
        })
        .catch(error =>{
          console.log(error)
        })
      }
      
    return (
        <>
          
                <div className='divider'>Continue With</div>
                <div >
                    <button onClick={handleGitHubLogin} className='btn  btn-circle btn-outline'><FaGithub className='text-3xl'></FaGithub></button>
                    <button onClick={()=>handleGoogle()} className='btn ml-2 btn-circle btn-outline'><FaGoogle className='text-3xl'></FaGoogle></button>
                
                </div>
            
        </>
    );
};

export default SocialPage ;