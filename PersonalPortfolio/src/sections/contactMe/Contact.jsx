import './contact.scss'

export default function Contact() {
  return (

    // const handleSubmit =  (e)=>{
    //   e.preventDefault();
    // }


    <div className='contact-me' id='contact'>
      <div className="left">
        <img src="assets/contact.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact Me !</h2>
        <form 
        
        // onClick={handleSubmit}
        > 
          <img src="assets/connect.svg" alt="" />
          <input type="text"  placeholder='Your Good Name'/>
          <input type="Email"  placeholder='Email'/>
          <textarea  placeholder='Contact regarding....'/>
          <button type='submit'>Send</button>
        </form>
       
    </div>
    {/* <a href='#portfolio'>
        <img src="assets/down.png" alt="" />
        </a> */}
      </div>
      
  )
}
