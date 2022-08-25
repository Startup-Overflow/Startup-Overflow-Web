import MentorProfile from "./MentorProfile";
import C from "../imgs/agriculture/c.jpg";

function ViewProfile() {
  return (
    <MentorProfile
      img={C}
      name="Brajesh Maheshwari"
      desc="Co-Founder Director of Allen Career Institute"
      btnName="Book for Appointment"
      availability="Monday to Saturday- 11 AM to 1 PM"
      experience="1.5 Years"
      location="Ahmedabad, Gujarat"
      specialization={[
        "Corporate Strategy",
        "Fund Raise Strategies",
        "Business Planning",
      ]}
      bio="I have completed MBA from IIM Ahmedabad in 1995. Corporate Strategy expert with over 15 years of experience in successfully executing both large and small projects with particular focus on Financial Services industry. Experience in handling successful Fund Raises, Mergers & Acquisitions, Product launches, Investor Relations and Product Design & Development."
    />
  );
}

export default ViewProfile;
