

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


const Contact = () => {
  const [state, handleSubmit] = useForm("xqkvlqzz");
  if (state.succeeded) {
      return <p>Gracias por Comunicarte... Estaré contactandote!</p>;
  }
  return (
    <section id="contact" className="py-10 px-3 text-white">
      <div className="text-center mt-8">
        <h3 className="text-4xl font-semibold">
          Contacta <span className="text-cyan-600">me</span>
        </h3>
        {/* <p className="text-gray-400 mt-3 text-lg">Get in touch</p> */}

        <div
          className="mt-16 flex md:flex-row flex-col
         gap-6 max-w-5xl bg-gray-800 md:p-6 p-2 rounded-lg mx-auto"
        >
    
      <form className="flex flex-col flex-1 gap-5" onSubmit={handleSubmit}>
        
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder='Ingrese su email'
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        placeholder='Ingrese su comentario...'
        rows={8}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
      <button 
      type="submit" 
      className="btn-primary w-fit"
      disabled={state.submitting}>      
      Enviar
      </button>  
      </div>
      
      
    </form>
   </div>
        </div>
      
    </section>
  );
}

export default Contact;
