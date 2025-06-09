import jsPDF from "jspdf";
import type { Experience } from "../data/experience";
import type { PersonalInfo } from "../data/types/personalInfo";

const useResumePDF = (resumeName: string, icons?: Record<string, string>) => {
  const doc = new jsPDF({ orientation: 'portrait', unit: 'px' });

  // Layout Constants
  const iconSize = { width: 10, height: 15 };
  const gap = 6;
  const marginLeft = 30;
  const subMarginLeft = marginLeft + 12;
  const marginTop = 50;
  const marginRight = doc.internal.pageSize.getWidth() - marginLeft;

  let textY = marginTop;

  const centerTextX = (text: string) => (doc.internal.pageSize.getWidth() - doc.getTextWidth(text)) / 2;

  const drawRoundedRect = (x: number, y: number, width: number, height: number, radius: number) => {
    doc.roundedRect(x, y, width, height, radius, radius, 'S');
  };

  const addHeader = (personalInfo: PersonalInfo) => {
    const { name, email, phone, linkedInUrl, gitHubUrl } = personalInfo;
    const yStep = doc.getFontSize();

    doc.setFont("helvetica", "bold").setFontSize(16);
    doc.text(name, centerTextX(name), textY);

    textY += yStep;
    doc.setFont("helvetica", "normal").setFontSize(12);
    const contact = `${email} | ${phone}`;
    doc.text(contact, centerTextX(contact), textY);

    textY += yStep;
    doc.setTextColor(0, 0, 255);
    doc.textWithLink(linkedInUrl, centerTextX(linkedInUrl), textY, { url: linkedInUrl });

    textY += yStep;
    doc.textWithLink(gitHubUrl, centerTextX(gitHubUrl), textY, { url: gitHubUrl });
    doc.setTextColor(0, 0, 0);
  };

  const addSummary = (text: string) => {
    textY += 30;
    doc.setFont("helvetica", "bold").setFontSize(12);
    doc.text(text, marginLeft, textY, { maxWidth: marginRight - 20, align: 'left' });
  };

  const addSkills = (skills: string[]) => {
    const paddingX = 6, paddingY = 4, radius = 6, fontSize = 10, chipGap = 5;
    const xStart = marginLeft;
    const maxLineWidth = doc.internal.pageSize.getWidth() - marginLeft * 2;
    textY += 80;

    if (icons?.skill) {
      doc.addImage(icons.skill, 'PNG', marginLeft, textY - iconSize.height + 2, iconSize.width, iconSize.height);
      doc.text("SKILLS", marginLeft + iconSize.width + gap, textY);
    } else {
      doc.text("SKILLS", marginLeft, textY);
    }

    textY += 10;
    doc.line(marginLeft, textY, marginRight, textY);
    textY += 5;
    doc.setFontSize(fontSize);

    let x = xStart;
    let y = textY;

    skills.forEach((skill) => {
      const textWidth = doc.getTextWidth(skill);
      const chipWidth = textWidth + paddingX * 2;
      const chipHeight = fontSize + paddingY * 2;

      if (x + chipWidth > maxLineWidth) {
        x = xStart;
        y += chipHeight + 8;
      }

      doc.setDrawColor(33, 150, 243).setLineWidth(0.5);
      drawRoundedRect(x, y, chipWidth, chipHeight, radius);

      doc.setTextColor(33, 150, 243);
      doc.text(skill, x + paddingX, y + paddingY + fontSize * 0.75);
      x += chipWidth + chipGap;
    });

    doc.setTextColor(0, 0, 0);
    textY = y + fontSize + paddingY * 2;
  };

  const addEducation = (titles: string[]) => {
    textY += 20;
    doc.setFont("helvetica", "bold").setFontSize(12);

    if (icons?.school) {
      doc.addImage(icons.school, 'PNG', marginLeft, textY - iconSize.height + 2, iconSize.width, iconSize.height);
      doc.text("EDUCATION", marginLeft + iconSize.width + gap, textY);
    } else {
      doc.text("EDUCATION", marginLeft, textY);
    }

    textY += 10;
    doc.line(marginLeft, textY, marginRight, textY);
    doc.setFont("helvetica", "normal");

    titles.forEach((title) => {
      textY += 18;
      doc.text(title, marginLeft, textY);
    });
  };

  const addExperience = (experience: Experience[]) => {
    textY += 25;
    doc.setFont("helvetica", "bold").setFontSize(12);

    if (icons?.work) {
      doc.addImage(icons.work, 'PNG', marginLeft, textY - iconSize.height + 2, iconSize.width, iconSize.height);
      doc.text("EXPERIENCE", marginLeft + iconSize.width + gap, textY);
    } else {
      doc.text("EXPERIENCE", marginLeft, textY);
    }

    textY += 10;
    doc.line(marginLeft, textY, marginRight, textY);

    experience.forEach(({ title, company, dates, location, description }) => {
      if (textY > 500) {
        doc.addPage();
        textY = marginTop;
      }

      textY += 20;
      const titleLine = `${title} @ ${company}`;
      doc.setFont("helvetica", "bold").setFontSize(12);

      if (icons?.workOutlined) {
        doc.addImage(icons.workOutlined, 'PNG', marginLeft, textY - iconSize.height + 2, iconSize.width, iconSize.height);
        doc.text(titleLine, marginLeft + iconSize.width + gap, textY);
      } else {
        doc.text(titleLine, marginLeft, textY);
      }

      textY += 10;
      doc.setFont("helvetica", "normal").setFontSize(10);
      doc.text(`${dates} | ${location}`, subMarginLeft, textY);

      description.forEach((desc) => {
        textY += 20;
        if (icons?.checkBox) {
          doc.addImage(icons.checkBox, 'PNG', subMarginLeft, textY - iconSize.height + 5, iconSize.width, iconSize.height);
          doc.text(desc, subMarginLeft + iconSize.width + gap, textY, { maxWidth: marginRight - 50 });
        } else {
          doc.text(desc, subMarginLeft, textY);
        }
      });
    });
  };

  const save = () => doc.save(resumeName);

  return {
    addHeader,
    addSummary,
    addSkills,
    addEducation,
    addExperience,
    save,
  };
};

export default useResumePDF;