import { FaBeer, FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';
const SocialPage = () => {
 
    // const handleGoogle =()=>{
    //     googleUser()
    //     .then(result =>{
    //         console.log(result.user)
    //     })
    //     .catch(error =>console.log(error))
    // }
    return (
        <>
          
                <div className='divider'>Continue With</div>
                <div>
                    <button  className='btn  btn-circle btn-outline'><FaGithub className='text-3xl'></FaGithub></button>
                    {/* <button  className='btn btn-primary btn-circle btn-outline'><FaFacebook/></button> */}
                </div>
            
        </>
    );
};

export default SocialPage ;