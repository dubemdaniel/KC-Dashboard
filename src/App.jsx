import './App.css'
// import Apple from './assets/images/Apple.svg'
import SignUp from './components/registration/SignUp'
import PersonalInformation from './components/registration/PersonalInfo'
import AddAddress from './components/registration/AddAddress'
import ManualAddress from './components/registration/ManualAddress'
import Login from './components/registration/Login'

function App() {

  return (
    <>
      <div className='gap-16 flex flex-col'>
      <SignUp />
      <PersonalInformation />
        <AddAddress />
        <ManualAddress />
        <Login/>
      </div>
    </>
  )
}

export default App
