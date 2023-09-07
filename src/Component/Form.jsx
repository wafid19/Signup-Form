import PropType from 'prop-types'

import TextInput from "./TextInput";


const Form = ({values, agreement, handleChange, handleAgreement, handleSubmit }) =>{
    return(
        <form className='mt-2' onSubmit={handleSubmit}>
          <TextInput 
            className='form-group'
            name="name"
            label="Name"
            placeholder="Md ABC"
            value={values.name}
            onChange={handleChange}
          
          />
          <TextInput 
            className='form-group'
            name="email"
            label="Email"
            type="email"
            placeholder="ABC@gmail.com"
            value={values.email}
            onChange={handleChange}
          
          />
          <TextInput 
            className='form-group'
            name="password"
            type="password"
            label="Password"
            placeholder="*******"
            value={values.password}
            onChange={handleChange}
          
          />
          <TextInput 
            className='form-group'
            name="birthDate"
            type="date"
            label="BirthDate"
            value={values.birthDate}
            onChange={handleChange}
          
          />

          <div className=" form-group mt-2">

             <label className='mr-4'>
                <input className='form-group' type="radio" name="gender" value='Male' onChange={handleChange} />
                Male
             </label>
             <label className='mr-4'>
                <input
                 className='form-group' 
                 type="radio" 
                 name="gender" 
                 value="Female"
                 onChange={handleChange} 
                 />
                Female
             </label>
             <label className=' mr-4'>
                <input className='form-group' type="radio" name="gender" value='Other' onChange={handleChange} />
                Other
             </label>

          </div>

          <div className="form-group">
            <label>
                <input className='form-group' type="checkbox" name="agreement" checked={agreement} onChange={handleAgreement} />
                I agree 
            </label>

          </div>

          <button className="btn btn-primary" type="submit" disabled={!agreement}>Create User</button>
         
        </form>
    );
};

Form.propTypes = {
    values: PropType.object.isRequired,
    agreement: PropType.bool.isRequired,
    handleChange: PropType.func.isRequired,
    handleAgreement: PropType.func.isRequired,
    handleSubmit: PropType.func.isRequired
}

export default Form