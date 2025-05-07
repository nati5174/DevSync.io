import {user} from './Register'


const Dashboard =  () => {


  const idToken = await user.getIdToken()

  await fetch('http://localhost:5000/auth/protected', 
      {
      method: 'POST',
      headers: {
          'authorization': `Bearer ${idToken}`, 
          'Content-Type': 'application/json'  // Ensure the body is JSON formatted if you're sending data
                  }
      }
      )






  return (

    <div>
        Dashboard
    </div>

    
  );
}

export default Dashboard;
