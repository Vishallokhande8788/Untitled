import {
  RiChat3Line,
  RiMap2Line,
  RiPhoneLine,
  RiFacebookBoxLine,
  RiTwitterXFill,
  RiLinkedinBoxLine,
} from "react-icons/ri";

function Aside() {
  const contactInfo = [
    {
      id: 0,
      title: "Chat to us",
      description: "Our friendly team",
      action: "hi@untitledui.com",
      icon: RiChat3Line,
    },
    {
      id: 1,
      title: "Visit us",
      description: "Come say hello at our office HQ",
      action: "100 Smith Street Collingwood VIC 3066 AU",
      icon: RiMap2Line,
    },
    {
      id: 2,
      title: "Call us",
      description: "Mon-Fri from 8am to 5pm.",
      action: "+1 (555) 000-0000",
      icon: RiPhoneLine,
    },
  ];

  return (
    <div className="flex min-h-full flex-col justify-between">
      {/* Contact Information */}
      <section>
        {contactInfo.map((info) => {
          return (
            <div className="mb-5" key={info.id}>
              {<info.icon size={25} />}
              <h3 className="text-lg font-bold">{info.title}</h3>
              <p className="mb-2 text-slate-700">{info.description}</p>
              <p>{info.action}</p>
            </div>
          );
        })}
      </section>

      {/* Social */}
      <section className="flex gap-1 text-lime-700">
        <RiFacebookBoxLine size={30} />
        <RiTwitterXFill size={30} />
        <RiLinkedinBoxLine size={30} />
      </section>
    </div>
  );
}

export default Aside;