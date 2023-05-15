import Image from "next/image";

const Achievement = () => {
  return (
    <div className="ach_sec">
      <div className="container">
        <div className="col-md-6">
          <div className="achi_dtl">
            <div className="ach_h wow fadeInUp">Our achievements</div>
            <div className="ach_p wow fadeInUp">
              AK Clinics is credited for being a first of its kind exclusive
              hair restoration center of north India since 2007. We are pioneers
              of FUE Hair Transplant in India.We are proud of the fact that we
              have full hair restoration facilities starting from clinical
              diagnosis, hair analysis, scalp biopsy, customized medical
              treatments , Bio-therapy (PRP), meso-therapy, laser therapy for
              hair growth, derma-rollers and last but not the least hair
              transplant which includes both FUT and FUE Hair Transplant
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-3">
            <div className="ach_card">
              <div className="icon">
                <Image src="/ach_icon.svg" width={75} height={75} />
              </div>
              <div className="crd_h">Lorem Ipsum</div>
              <div className="crd_p">
                We have a proven track record of outstanding natural results –
                visit our results gallery to see hair transformation before and
                after images for yourself.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ach_card">
              <div className="icon">
                <Image src="/ach_icon.svg" width={75} height={75} />
              </div>
              <div className="crd_h">Lorem Ipsum</div>
              <div className="crd_p">
                We have a proven track record of outstanding natural results –
                visit our results gallery to see hair transformation before and
                after images for yourself.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ach_card">
              <div className="icon">
                <Image src="/ach_icon.svg" width={75} height={75} />
              </div>
              <div className="crd_h">Lorem Ipsum</div>
              <div className="crd_p">
                We have a proven track record of outstanding natural results –
                visit our results gallery to see hair transformation before and
                after images for yourself.
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="ach_card">
              <div className="icon">
                <Image src="/ach_icon.svg" width={75} height={75} />
              </div>
              <div className="crd_h">Lorem Ipsum</div>
              <div className="crd_p">
                We have a proven track record of outstanding natural results –
                visit our results gallery to see hair transformation before and
                after images for yourself.
              </div>
            </div>
          </div>
        </div>
        <div className="award_sec">
          <div className="award">
            <div className="awrd_h wow fadeInUp">Awards & recognitions</div>
            <div className="awrd_p wow fadeInUp">
              There are only a selected few hair transplant surgeons who are
              taken in the premier league and to be a fellow means that you are
              allowed to use the abbreviation, FISHRS, an honour that is not
              given to anyone till he has earned it. However, Dr. Kapil Dua has
              entered this list of the elite doctors.
            </div>
          </div>
          <div className="row">
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd1.png" width={150} height={75} />
              </div>
            </div>
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd2.png" width={150} height={75} />
              </div>
            </div>
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd3.png" width={150} height={75} />
              </div>
            </div>
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd4.png" width={150} height={75} />
              </div>
            </div>
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd5.png" width={150} height={75} />
              </div>
            </div>
            <div className="col-md-2">
              <div className="image_sec_awrd">
                <Image src="/awrd6.png" width={150} height={75} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Achievement;
