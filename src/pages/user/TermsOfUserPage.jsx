import React from "react";
import Header from "./components/Header";
import Footer from "./Footer";

function TermsAndConditions() {
  return (
    <div className="">
      <div className="">
        <Header />

        <div className="mt-0 md:mt-0 px-4 md:px-[100px]">
          <h1 className="font-sf-600 text-[38px] md:text-[70px] text-[#000] text-center px-[20px] font-semibold pt-7 pb-4 md:pb-0 md:pt-[40px]">
            <span className="text-[#4DA833]">Terms And</span> Conditions
          </h1>
        </div>


        <div className="px-4 md:px-[100px] mb-16 ">

       
          {/* 1. TERMS */}
          <div className=''>
            <Title title={'1. Terms'} />
            <Paragraph
              title={`1.1 The term mentioned here as ‘we’,’our’ and ‘us’ would mean ‘uaeassist, its representatives, subsidiaries, agents, affiliates or its assigned parties.`}
            />
            <br />
            <Paragraph
              title={`1.2 The website and its contents is herein referred to as ‘uaeassist’.`}
            />
            <br />

            <Paragraph
              title={`1.3 With using the website you agree to bind by the website’s terms of use and its privacy policy and agree to comply with all the applicable governing rules. All the content contained in this website is protected by copyright and trademark law.`}
            />
            <br />
            <Paragraph
              title={`1.4 The site is open to be used by people above the age of 18 unless legally restricted from using the site under the laws of the country of your residence.`}
            />
          </div>

          {/* USE LICENSE & RESTRICTIONS */}
          <div className=''>
            <Title title={'2. Use License & Restrictions:'} />
            <Paragraph
              title={`2.1 The materials contained in the site can be temporarily downloaded for personal and non-commercial viewing only, which does not imply:`}
            />
            <Paragraph title={'a) Modifying or copying the contents'} />
            <Paragraph
              title={`b) To use for any kind of display both commercial and non-commercial`}
            />

            <Paragraph
              title={`c) Manipulate the website or its functionalities in any way.`}
            />
            <Paragraph title={`d) Remove copyright or trademarks.`} />
            <Paragraph
              title={'e) Transfer of materials to any entity or server.'}
            />

            <Paragraph
              title={
                '2.2 In using the website, you agree to undertake not to engage in the following activities:'
              }
            />
            <br />
            <Paragraph
              title={
                'a) Engage in any activities that will tamper the contents, infrastructure or the working of the site.'
              }
            />
            <Paragraph
              title={
                'b) Manipulate the contents, database or functionality of the website for any unauthorized activities.'
              }
            />
            <Paragraph
              title={
                'c) Infringe upon any person’s or property right including copyright, trade secret, privacy right.'
              }
            />
            <Paragraph
              title={
                'd) Impersonate to extrude money, passwords or personal information from any person, entity or enterprise.'
              }
            />
            <Paragraph
              title={
                'e) Create any kind of virus or malware intended to transmit destroying the site.'
              }
            />
          </div>

          <div className=''>
            <Title title={'3. Your Responsibilities'} />
            <Paragraph
              title={`3.1 We do ot claim to be a real estate agency, we only provide services where agents can market. You may view the details of the property along with the other contents provided in the website. The third parties and the agencies are responsible for the details provided and the retrieving the enquiries from you. We only facilitate the generation of the enquiry and do not form part of the conversation, deal or transaction between you and the agency.`}
            />
            <br />
            <Paragraph
              title={
                '3.2 All the details posted in the website are directly provided by the agencies/third parties and are uploaded in good faith. Though we put in good effort to verify the details, it is your responsibility to make your own enquiries and verify the same. We offer no guarantee on the accuracy of the information provided by the third parties / agencies.'
              }
            />
            <br />
            <Paragraph
              title={`3.3 We expect good demeanor and to act in good faith towards the agencies.`}
            />
          </div>



 {/* LIMITATIONS */}
 <div className=''>
            <Title title={'4. Limitations'} />
            <Paragraph
              title={`4.1 We accept no liability for damages in any event due to the use or lack of proper use of the details of the site.`}
            />
            <br />
            <Paragraph
              title={
                '4.2 We do not take up any responsibility for any loss or damage due to the following conditions: Any software or connection errors or unavailability of content, or any other events beyond our reach or control'
              }
            />
            <Paragraph
              title={`a) any loss of account or password, caused due to a system breakdown or power failure or due to the non-retrievability of your account`}
            />

            <Paragraph
              title={`b) The dependency on any content hosted in our Website`}
            />
            <Paragraph
              title={`c) any direct, consequential, special or punitive loss, damage, costs and expenses`}
            />
            <Paragraph title={'d) Profit loss'} />

            <Paragraph title={'e) Business loss'} />
            <Paragraph
              title={
                'f) Lack of goodwill or something affecting your reputation or'
              }
            />
            <Paragraph title={'g) Data loss or data corruption'} />
            <br />
            <Paragraph
              title={
                '4.3 Unless we enter into an agreement the use of our website or its contents are not to be used for any business purpose.'
              }
            />
            <br />
            <Paragraph
              title={
                '4.4 We do not take any liability for loss or damage of contents due to virus attacks, service attack or other technologically malfunctionings that may infect your system due to the download of any programmes , content or software from our site. 4.5 By enquiring through our Website, you agree to share your details with the agent, estate agent, landlord, developer marketing the property, you enquired about.'
              }
            />
          </div>

          {/* REVISIONS AND ERRATA */}
          <div className=''>
            <Title title={'5. Revisions And Errata'} />
            <Paragraph
              title={`The details contained in the site could have some typographical, or photographic errors. We do not claim any accuracy to the details published.Changes may be made in the site from time to time without any prior notice.`}
            />
          </div>

          {/* AVAILABILITY OF WEBSITE */}
          <div className=''>
            <Title title={'6. Availability Of Website'} />
            <Paragraph
              title={`The website and its services will be available to you round the clock, but in case of any updates, we would put our best efforts to intimate you beforehand but cannot guarantee fault free continuous services. Maintenance works and updations would require attention and might interrupt service or lead to data loss. It is in our discretion to change or discontinue any part of the website or the services which would also mean your access to the site and its services.`}
            />
          </div>

          {/* THIRD PARTY ADVERTISEMENTS */}
          <div className=''>
            <Title title={'7. Third Party Advertisements'} />
            <Paragraph
              title={`We do not endorse any advertisements or links that appear in the site advertisements on our Website.We also do not take up any responsibilities for any warranties or representations of advertisements made by any third party or agencies. It is the sole discretion of the user to verify the details before entering into any contract or purchase of the product. Information published in our publications, posts, or inserts should not be considered as a substitute for professional legal, financial or real estate advice.`}
            />
          </div>

          {/* SITE TERMS OF USE MODIFICATIONS */}
          <div className=''>
            <Title title={'8. Site Terms Of Use Modifications'} />
            <Paragraph
              title={`The terms of use or any such terms with respect to the Website is subject to changes at any time without notice. By using the website and its services you agree to be bound by the Terms of Use.`}
            />
          </div>

          {/* CONTRIBUTIONS */}
          <div className=''>
            <Title title={'9. Contributions'} />
            <Paragraph
              title={`9.1 ‘ Contributions’, the term here in these ‘Terms of Use’, pertains to any kind of information that includes data,text, video, images or any other material that was permitted to be uploaded, shared, published, or saved in the website.`}
            />

            <br />

            <Paragraph
              title={`9.2 The said contributions can at any time be removed, altered or denied access to you without any prior notice and we reserve the right to do so without any intimations or communications pertaining to it if found:`}
            />

            <Paragraph
              title={`a) That the contentiousContributions are in violation of any law or regulation;`}
            />

            <Paragraph
              title={`b) That the Contributions encroach upon the intellectual property rights of any third party;`}
            />

            <Paragraph
              title={`c) That it is required to do so by an authority or any regulatory body, to take-down the contents in the contribution, that are`}
            />

            <Paragraph title={`1. misleading`} />
            <Paragraph
              title={`2. inappropriate with respect to the purpose of our Website;`}
            />
            <Paragraph title={`3. Offensive and obscene`} />
            <Paragraph title={`4. Incorrect matter;`} />
            <Paragraph
              title={`5. Unlawful content as per the norms and conduct of a particular region.`}
            />
            <Paragraph
              title={`6. Malicious, any kind of spyware that can corrupt the website.`}
            />

            <br />

            <Paragraph
              title={`9.3 With ‘Contributions that satisfy all norms, you offer us an exclusive right over the content that grants us a royalty free , irrevocable, perpetual and transferable license to reproduce, modify, distribute and publish, display and publicize your content across the world through any medium.`}
            />

            <br />
            <Paragraph
              title={`9.4 Each user of the website has the right to use your name or the one attached to your content along with the right to represent and warranty that:`}
            />

            <Paragraph
              title={`1.you are in absolute control and ownership of the contents in the Contributions.`}
            />
            <Paragraph
              title={`2.you are in possession of all the necessary licenses, rights, that grants you permission to use and authorize us to publicize your Contributions.`}
            />
            <br />

            <Paragraph
              title={`9.5 In case of any Contributions that you retain moral rights over, then , you declare that:`}
            />

            <Paragraph
              title={`1.No information that is personally related is contained in the Contribution, or any related work, that is an updation of the Contribution; and`}
            />
            <Paragraph
              title={`2.You accept and agree that we do not have any control of and are not responsible for the tampering or use of these Contributions by any third party or user.`}
            />
            <br />

            <Paragraph title={`9.6 You represent and warrant that:`} />

            <Paragraph
              title={`1.you have the lawful right including all necessary licenses, rights, consents and permissions to use and authorize us to display your Contributions;`}
            />
            <Paragraph
              title={`2.You will not make any Contributions that violates the rights of any third party, and that you will pay all royalties, fees or other payable amount for the Contributions made by you; and`}
            />
            <Paragraph
              title={`3.Your Contributions will not contain any contents that are :`}
            />

            <Paragraph title={`1. misleading`} />
            <Paragraph title={`2. Deceptive`} />
            <Paragraph title={`3. Incorrect`} />
            <Paragraph title={`4. Offensive`} />
            <Paragraph
              title={`5. directly or indirectly related to any advertising or marketing of any products or services`}
            />

            <Paragraph
              title={`6.Obscene, that includes pornographic, hate, racial or ethnically offensive materia`}
            />

            <Paragraph title={`7. Defamatory or`} />
            <Paragraph
              title={`8. Unlawful or that which encourages unlawful conduct.`}
            />
          </div>

          {/* INTELLECTUAL PROPERTY */}
          <div className=''>
            <Title title={'10. Intellectual Property'} />
            <Paragraph
              title={
                '10.1 Unless otherwise expressed, all contents of the Website are copyrights, trademarks, trade dress or any other intellectual property owned and controlled by us, or one of our associates or by third parties who have entered into agreement with us and are protected by the applicable laws.'
              }
            />
            <br />

            <Paragraph
              title={`10.2 We, along with our suppliers and licensors have absolute authority over all intellectual property rights in all contexts, programs, products, processes, technology, content and any other materials, which appear here in the site. Having access to this Website does not mean conferring upon any right to anyone under any conditions or any third party's intellectual property rights. Using the contents of this website, including copying or saving them in whole or part, other than for your own personal, non-commercial use, is not permitted without our consent. You may not alter, propagate or re-post anything on this site for any purposes.`}
            />
            <br />

            <Paragraph
              title={
                '10.3 The Names and logos and all related product and service names, design marks and slogans are our trademarks or service marks belonging to us or our licensors.'
              }
            />
            <br />
            <Paragraph
              title={
                '10.4 Access to this Website does not authorize anyone to use any name, logo or mark in any manner.'
              }
            />
          </div>

          {/* ELECTRONIC COMMUNICATIONS */}
          <div className=''>
          <Title title={'11. Electronic Communications'} />
            <Paragraph
              title={
                'By using the website or sending us mails, you are engaging with us through the electronic media. Our communications with you are basically through emails or through posts on the web-sites. With communicating with us you consent to receive electronically any communications related to the use of our site. Any communication from us is intended for receipt by you and shall be deemed delivered and effective when sent to the email address you provide on the Website for your account'
              }
            />
          </div>

          {/* INDEMNITY */}
          <div className=''>
          <Title title={'12. Indemnity'} />
            <Paragraph
              title={
                '12.1 This is to state that you agree to indemnify and hold us and our affiliates (which will include our officers, agents, partners and employees) against any and all loss, liability or claim that includes the attorney’s fees, in connection with the use of and access to our Website or in relation to the Contributions that are not in accordance with the Terms.'
              }
            />
          </div>

          {/* DISCLAIMER */}
          <div className=''>
          <Title title={'13. Disclaimer'} />
            <Paragraph
              title={
                'The contents and the property are advertised in the website as and when they are made available. We assure no warranty, or claim to include the veracity or non-infringement of intellectual property or that which is in violation of any rights. We also do not offer any assurances on the accuracy or reliability of the materials published or linked with this site.'
              }
            />
          </div>

          {/* MONITORING AND RECORDING TELEPHONE CALLS */}
          <div className=''>
          <Title title={'14. Monitoring And Recording Telephone Calls'} />
            <Paragraph
              title={
                'Calls of Real Estate Agents or Brokers who are engaged in our call tracking services and who have agreed to generate enquiries through our website, will be recorded for training and assistance. The calls will be recorded only with prior consent and will be reminded of the recordings before a conversation.'
              }
            />
          </div>

          {/* GOVERNING LAW */}
          <div className=''>
          <Title title={'15. Governing Law'} />
            <Paragraph
              title={
                '15.1 The Terms of use listed here and your access to the Website are subject to the jurisdiction of the laws in the United Arab Emirates as applicable anywhere in the Emirate of Dubai. Any dispute regarding the Terms of Use can be raised and challenged within its jurisdiction in the courts of Dubai.'
              }
            />
            <Paragraph
              title={
                '15.2 In case any terms mentioned in the agreement become invalid, out of reason, or unenforceable under law , the maintainability of the remaining law will not be affected.'
              }
            />
          </div>

          {/* CONTACT US */}
          <div className=''>
          <Title title={'16. Contact Us'} />
            <Paragraph
              title={
                '16.1 As a real estate agency we have a valid license to sell and manage properties and execute deals. Our contractors are contractually obliged to list properties that are available for or lease with proper authentication from the property owner and the concerned governmental authorities. We expect all the properties listed in the site to be its original portrayal, with the right information provided on the proposed transaction. Incase you come across any misleading information, wrong portrayal or suspected misrepresentation of any of the properties listed in the website, please feel free to inform us with the details to abuse@uaeassist For any queries, complaints or recommendations about these Terms of Use, please contact us at the following address: info@uaeassist'
              }
            />
          </div>


        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TermsAndConditions;





function Title({ title }) {
  return (
    <h1 className='font-sf-700 font-bold text-black text-[25px] md:text-[35px] my-3 md:my-[25px]'>
      {title}
    </h1>
  );
}


function Paragraph({ title }) {
  return (
    <h1 className='text-[#666666] font-poppins-500 font-medium text-[12px] md:text-[15px]'>
      {title}
    </h1>
  );
}