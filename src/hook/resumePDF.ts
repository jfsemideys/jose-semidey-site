import jsPDF from "jspdf";
import type { Experience } from "../data/experience";
import type { PersonalInfo } from "../data/types/personalInfo";

const useResumePDF = (resumeName: string, icons?: { [key: string]: string }) => {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'px',
    });
    const iconWidth = 10;
    const iconHeight = 15;
    const gap = 6;
    const marginLeft = 30;
    const subMarginLeft = marginLeft + 12;
    const margingTop = 50;
    let textY = margingTop;
    const marginRight = doc.internal.pageSize.getWidth() - 30;
    
    const getStartCenteredText: number | any = (text: string) => 
        (doc.internal.pageSize.getWidth() - doc.getTextWidth(text))/2
    
    const addHeader = (personalInfo: PersonalInfo | any) => {
        const {name, email,  phone, linkedInUrl, gitHubUrl} = personalInfo;
        const ySpace = doc.getFontSize();
      
        let textX = getStartCenteredText(name);
        doc.text(name, textX, textY);
        textY += ySpace;
 
        const mailPhone = `${email} | ${phone}`;

        textX = getStartCenteredText(mailPhone)
        doc.text(mailPhone, textX, textY);
        textX = getStartCenteredText(linkedInUrl);
        textY += ySpace;
        doc.setTextColor(0, 0, 255)
        doc.textWithLink(linkedInUrl, textX, textY, {
            url: linkedInUrl,
          });
         
        textX = getStartCenteredText(gitHubUrl);
        textY += ySpace;
        doc.textWithLink(gitHubUrl, textX, textY, {
            url: gitHubUrl,
          });     
    }

    const addSummary = (text: string) => {
        doc.setTextColor(0, 0, 0);
        textY += 30;
        doc.setFont("helvetica", "bold"); 
        doc.setFontSize(12);
       doc.text(text, marginLeft, textY, {maxWidth: marginRight - 20, align: 'left'});       
   
    }

    const addEducation = (titles: string[]) => {
        const ySpace = doc.getFontSize() + 10;
        textY +=70;
  
        if (icons?.school) {
            doc.addImage(icons?.school, 'PNG', marginLeft,  textY - iconHeight + 2, iconWidth, iconHeight);
            doc.text("EDUCATION", marginLeft + iconWidth + gap, textY);
          } else {
            doc.text("EDUCATION", marginLeft, textY);
          }

        textY += 5;
        doc.line(marginLeft, textY, marginRight, textY, "S");

        textY += 5;   
        doc.setFont("helvetica", "normal"); 
        titles.forEach((title) => {
            textY += ySpace;
            doc.text(title, marginLeft, textY);    
        });
    }

    const addExperience = (experience: Experience[]) => {
        const ySpace = doc.getFontSize()+10;
        textY += 25;
        doc.setFont("helvetica", "bold"); 
        if (icons?.work) {
            doc.addImage(icons?.work, 'PNG', marginLeft,  textY - iconHeight + 2, iconWidth, iconHeight);
            doc.text("EXPERIENCE", marginLeft + iconWidth + gap, textY);
          } else {
            doc.text("EXPERIENCE", marginLeft, textY);
          }
      
        textY += 5;
        doc.line(marginLeft, textY, marginRight, textY, "S");
        experience.forEach((item) => {
           
           const  {title, company, dates, location, description} = item
            if(textY > 500) {
                doc.addPage();
                textY = margingTop;
            }
            textY += ySpace;
            const titleCompany = `${title} @ ${company} `;
            doc.setFont("helvetica", "bold"); 
            doc.setFontSize(12);

            if (icons?.workOutlined) {
                doc.addImage(icons?.workOutlined, 'PNG', marginLeft,  textY - iconHeight + 2, iconWidth, iconHeight);
                doc.text(titleCompany, marginLeft + iconWidth + gap, textY);
              } else {
                doc.text(titleCompany, marginLeft, textY);
              }
  
            textY += 10; 
            const dateLocation = `${dates} | ${location}`;
            doc.setFont("helvetica", "normal"); 
            doc.setFontSize(10);
            doc.text(dateLocation, subMarginLeft, textY);  
            doc.setFontSize(10);
            description.forEach((decItem) => {
                doc.setFont("helvetica", "normal"); 
                textY += ySpace; 
                if (icons?.checkBox) {
                    doc.addImage(icons?.checkBox, 'PNG', subMarginLeft,  textY - iconHeight + 5, iconWidth, iconHeight);
                    doc.text(decItem, subMarginLeft + iconWidth + gap , textY, {maxWidth: marginRight - 50});
                  } else {
                    doc.text(decItem, subMarginLeft, textY);
                  }
            });
        });
    }
    const save = () => {
        doc.save(resumeName);
    }

    return{
        addHeader, 
        addSummary,
        addEducation,
        addExperience,
        save
    };
}

export default useResumePDF;