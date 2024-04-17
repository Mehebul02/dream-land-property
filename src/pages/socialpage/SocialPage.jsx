import { useContext } from 'react';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../provider/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
const SocialPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state || "/";
 const {googleLogin,gitHubLogin} = useContext(AuthContext)
    const handleGoogle =()=>{
        googleLogin()
        .then(result =>{
          navigate(from)
            console.log(result.user)
        })
        .catch(error =>console.log(error))
    }
    const handleGitHubLogin =()=>{
        gitHubLogin()
        .then(result =>{
          navigate(from)
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