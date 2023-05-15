import Image from "next/image";
const Bannner = () => {
  return (
    <div className="about_bannner">
      <Image src="/banner3.png" fill={true} />
      <div className="about_b_c0">
        <span className="b_txt0 wow fadeInUp animated">Laser Hair Removal</span>
      </div>
    </div>
  );
};
export default Bannner;
