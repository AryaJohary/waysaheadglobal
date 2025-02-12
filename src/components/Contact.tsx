import React from 'react';
import { Linkedin, Mail, Phone, Twitter } from 'lucide-react';

const contacts = [
  {
    id: 'linkedin',
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'https://www.linkedin.com/company/waysahead',
    display: 'linkedin.com/waysahead'
  },
  {
    id: 'email',
    icon: Mail,
    label: 'Email',
    value: 'support@waysahead.com'
  },
  {
    id: 'phone',
    icon: Phone,
    label: 'Customer Care',
    value: '+919876543210'
  },
  {
    id: 'twitter',
    icon: Twitter,
    label: 'Twitter',
    value: 'https://twitter.com/waysahead',
    display: '@waysahead'
  }
];

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-white">Get In Touch</h2>
          <p className="mt-4 text-lg text-gray-300">
            We'd love to hear from you. Connect with us through any of the channels below.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((item) => {
            let hrefLink = item.value;
            if (item.id === 'email') {
              hrefLink = `mailto:${item.value}`;
            } else if (item.id === 'phone') {
              hrefLink = `tel:${item.value.replace(/[^+\d]/g, '')}`; // remove non-digits except +
            }
            return (
              <div
                key={item.id}
                className="flex flex-col items-center text-center p-6 bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-200"
              >
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-600 mb-4">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white">{item.label}</h3>
                <p className="mt-2 text-gray-300">{item.display || item.value}</p>
                <a
                  href={hrefLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-blue-400 hover:underline"
                >
                  {item.id === 'email'
                    ? 'Send Email'
                    : item.id === 'phone'
                    ? 'Call Us'
                    : 'Visit'}
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
