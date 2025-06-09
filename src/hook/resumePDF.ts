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
      
        doc.setFont("helvetica", "bold"); 
        doc.setFontSize(16);
        let textX = getStartCenteredText(name);
        doc.text(name, textX, textY);
        textY += ySpace;
        doc.setFontSize(12);
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
    const drawRoundedRect = (
        doc: jsPDF,
        x: number,
        y: number,
        width: number,
        height: number,
        radius: number
      ) => {
        doc.roundedRect(x, y, width, height, radius, radius, 'S');
      };

      
    const addSkills = (skills: string[]) => {
        const paddingX = 6;
        const paddingY = 4;
        const gap = 5;
        const radius = 6;
        const xStart = marginLeft;
        const maxWidth = doc.internal.pageSize.getWidth() - marginLeft * 2;
        textY += 80;
        let x = xStart;
       
        if (icons?.school) {
            doc.addImage(icons?.skill, 'PNG', marginLeft,  textY - iconHeight + 2, iconWidth, iconHeight);
            doc.text("SKILLS", marginLeft + iconWidth + gap, textY);
          } else {
            doc.text("SKILLS", marginLeft, textY);
          }
          
        textY += 5;
       
        doc.line(marginLeft, textY, marginRight, textY, "S");
        const fontSize = 10;
        doc.setFontSize(fontSize);
        textY += 5;
        let y = textY;
        skills.forEach((skill) => {
            const textWidth = doc.getTextWidth(skill);
            const chipWidth = textWidth + paddingX * 2;
            const chipHeight = fontSize + paddingY * 2;

            if (x + chipWidth > maxWidth) {
                x = xStart;
                y += chipHeight + 8;
            }

        // Draw rounded rectangle (like MUI Chip)
        doc.setDrawColor(33, 150, 243); // blue border
        doc.setLineWidth(0.5);
        drawRoundedRect(doc, x, y, chipWidth, chipHeight, radius);

        // Draw text centered inside the chip
        doc.setTextColor(33, 150, 243);
        doc.text(skill, x + paddingX, y + paddingY + fontSize * 0.75);

        x += chipWidth + gap;
    });

        textY = y + fontSize + paddingY * 2; // Update for next section
    }

    const addEducation = (titles: string[]) => {
        doc.setDrawColor(0, 0, 0); // b
        doc.setTextColor(0, 0, 0);
        const ySpace = doc.getFontSize() + 10;
        textY +=20;
        doc.setFontSize(12);
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
        doc.setFontSize(12);
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
        addSkills,
        addEducation,
        addExperience,
        save
    };
}

export default useResumePDF;