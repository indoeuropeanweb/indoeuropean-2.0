'use client';
import { useState } from "react";
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary, {
  accordionSummaryClasses,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&::before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem', color: "primary" }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: 'rgba(29, 53, 100, .03)',
  flexDirection: 'row-reverse',
  [`& .${accordionSummaryClasses.expandIconWrapper}.${accordionSummaryClasses.expanded}`]:
    {
      transform: 'rotate(90deg)',
    },
  [`& .${accordionSummaryClasses.content}`]: {
    marginLeft: theme.spacing(1),
  },
  ...theme.applyStyles('dark', {
    backgroundColor: 'rgba(29, 53, 100, .05)',
  }),
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(29, 53, 100, .125)',
}));

export default function MyAccordion({id, title, content}) {
  const [expanded, setExpanded] = useState(`panel${id}`);

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion onChange={handleChange(`panel${id}`)}>
        <AccordionSummary aria-controls={`panel${id}d-content`} id={`panel${id}d-header`}>
          <Typography component="h4">{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {Array.isArray(content) ? (
            content.map((item, index) => {
              if (typeof item === "string") {
                return (
                  <Typography key={index} component={"p"}>
                    {item}
                  </Typography>
                );
              }

              if (item.type === "list") {
                return (
                  <ul key={index} className="list-disc pl-6 space-y-2">
                    {item.items.map((listItem, i) => (
                      <li key={i} className="my-3">
                        <Typography component="p">{listItem}</Typography>
                      </li>
                    ))}
                  </ul>
                );
              }

              return null;
            })
          ) : (
            <Typography>{content}</Typography>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
