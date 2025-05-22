import emailjs from '@emailjs/browser';
const useEmail = ()  => {
    const TEMPLATE_KEY =  import.meta.env.VITE_API_EMAIL_TEMPLATE_KEY;
    const SERVICE_KEY =  import.meta.env.VITE_API_EMAIL_SERVICE_KEY;
    const PUBLIC_KEY =  import.meta.env.VITE_API_EMAIL_PUBLIC_KEY;
    emailjs.init(PUBLIC_KEY);
    const sendEmail:string | any = async (name: string, email:string, message: string) => {
        try {
            const response = await emailjs.send(SERVICE_KEY,TEMPLATE_KEY,{
                name: name,
                message: `${message} - ${email}`,
                title: "Recruiter",
                email: email,
                });
                console.log('response.ststue', response.status)
                return response.status;
        } catch(error) {
            console.log('error', error)
            return "FAILED";
        }
    }
    return sendEmail;
}
export default useEmail;