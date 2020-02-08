import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Header from '../components/header/Header';
import FAQCollapse from '../components/faqcollapse/FAQCollapse';

const FAQ = () => {
  var FAQs = [
    {
      title:
        ' How do you get the documents and information from your clients if you’re not local? ',
      desc:
        'We have several ways we collect information from clients ranging from online shared file folders, docs scanned to email, online fetching software or client provided credentials to online portals. We evaluate the best and easiest option for each client and are not specific to one over another.'
    },
    {
      title: 'How do you train remotely?',
      desc:
        "We train using screen sharing software. We avoid being cramped into a small space and work directly on our client’s computers as if we were side by side. We can also toggle back from our screens to our client's screens, which satisfies both training and the review of all financial information with our clients."
    },
    {
      title:
        ' When is a good time to start integrating QuickBooks with our construction software?',
      desc:
        'There is never a good time to “stop the train” but we help create a reasonable timeline to implement new software and processes throughout the entire company, avoiding interference with daily operations and allows for a smooth transition.'
    },
    {
      title:
        ' Will you update financials in our construction software or just QuickBooks? ',
      desc:
        ' We will update company financials and project financials in both QuickBooks Online and your construction software. We update all project financials for accurate job costing and all company related financial related to overhead and projects.'
    }
  ];

  return (
    <>
      <Header />
      <Container className="pt-4">
        <h2 class="text-center ttle-bott-bor mb-5">
          Frequently Asked Questions
        </h2>
        <Row id="faqacc">
          {FAQs.map((item, i) => {
            return (
              <>
                <Col md={6}>
                  <FAQCollapse title={item.title} desc={item.desc} i={i} />
                </Col>
              </>
            );
          })}
        </Row>
      </Container>
    </>
  );
};
export default FAQ;
