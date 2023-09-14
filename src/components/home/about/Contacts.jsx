import React from 'react'
import './contacts.css'

const Contacts = () => {
  return (
    <>
    <section class="bg-white ">
  <div class="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h1 class="mb-4 text-5xl tracking-tight font-extrabold text-center dark:text-vorreiter">Partner With Us</h1>
      <p class="mb-8 lg:mb-16 font-light text-center  sm:text-xl pt-3">Got a technical issue? Want to send feedback about a beta feature? Need details about our Business plan? Let us know.</p>
      <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-lg font-medium  text-black">Your email</label>
              <input type="email" id="email" class="shadow-sm border border-gray-300  text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 bg-vorreiter dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light " placeholder="name@flowbite.com" required></input>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-lg font-medium text-black">Subject</label>
              <input type="text" id="subject" class="block p-3 w-full text-sm text-gray-900 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 bg-vorreiter dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required></input>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-lg font-medium text-black">Your message</label>
              <textarea id="message" rows="6" class="block p-2.5 w-full text-sm text-gray-900 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 bg-vorreiter dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
          </div>
          <button type="submit" class="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-vorreiter sm:w-fit hover:bg-black focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
      </form>
  </div>
</section>
    </>
  )
}

export default Contacts