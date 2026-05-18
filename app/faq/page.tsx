"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type AccordionItem = {
    title: string;
    description: string;
};

type DynamicAccordionProps = {
    items: AccordionItem[];
};

const items = [
    {
        title: "What is saja?",
        description:
            "Saja is a comprehensive customer feedback and satisfaction management system designed to help businesses understand and improve their customer experience. It provides real-time insights, benchmark scores and automated alerts for unhappy customers. It's a browser-based solution that requires no downloads and offers high data security.",
    },
    {
        title: "What is the main purpose of saja?",
        description:
            "Saja aims to provide real-time customer feedback, satisfaction scores, and insights to help businesses improve their products and services. We provide an objective parameter to compare the performance of different branches from a customer satisfaction perspective.",
    },
    {
        title: "What is net promoter score(NPS)?",
        description:
            `The Net Promoter Score (NPS) is a widely used market research metric that gauges customer loyalty based on their willingness to recommend a company, product, or service. Developed by Fred Reichheld in collaboration with Bain & Company and Satmetrix, NPS is valued for its simplicity and transparency. Respondents are categorized into "promoters" (ratings of 9 or 10), "passives" (ratings of 7 or 8), and "detractors" (ratings of 6 or lower). The NPS is calculated by subtracting the percentage of detractors from the percentage of promoters, typically expressed as an integer.`,
    },
    {
        title: "What can we measure as part of the customer satisfaction surveys?",
        description:
            "Our customer satisfaction surveys allow you to measure various attributes relevant to your business. Respondents rate these attributes on a five-point scale, enabling you to track your performance over time. While we provide a list of common attributes, we recommend selecting only those necessary to keep the survey concise and respectful of the respondents' time.",
    },
    {
        title: "Can I add my own attributes?",
        description:
            "Absolutely. You can add any attributes you deem necessary for evaluating your business. However, when adding attributes, ensure they are concise, easy to understand, specific, and do not combine multiple criteria. For instance, 'waiting time' and 'price' should be separate attributes.",
    },
    {
        title: "Why does Customer Satisfaction and Loyalty matter for Businesses?",
        description:
            "Receive instant notifications when customers are unhappy so you can act quickly.",
    },
    {
        title: "How can your service help identify opportunities and threats?",
        description:
            "By comparing the performance of different branches, businesses can identify areas of strength and weakness. This information can be used to address threats and capitalize on opportunities.",
    },
    {
        title: "What are benchmark scores?",
        description:
            "Benchmark scores are industry standards that allow you to compare your customer satisfaction scores with those of your competitors. This helps you understand where you stand in the market.",
    },
    {
        title: "How does Saja facilitate customer feedback?",
        description:
            "Our service allows customers to provide feedback, suggestions, ideas, and even complaints. This opens up possibilities for innovation and helps businesses deliver excellent customer service experiences.",
    },
    {
        title: "How does Saja assist in handling unhappy customers?",
        description:
            "We provide automated real-time email alerts when a customer is unhappy. This allows businesses to address issues promptly, minimizing the chances of negative publicity on social media and other platforms.",
    },
    {
        title: "How does your contribute to business profitability?",
        description:
            "By helping businesses improve customer satisfaction, our service encourages repeat business, which in turn increases profitability.",
    },
    {
        title: "Do I need to download an app to use your service?",
        description:
            "No, Saja runs on a browser, so there's no need for you or your customers to download any app.",
    },
    {
        title: "Can the survey forms be customized?",
        description:
            "Yes, the survey forms can be customized to match your brand theme. You can add your brand logo, slogan, and choose the color theme.",
    },
    {
        title: "How secure is Saja?",
        description:
            "We assure a high level of data security. Your data will be automatically encrypted, ensuring that even our team cannot access your account. Our team maintains regular quality and spam control to ensure the integrity of your feedback.",
    },
    {
        title: "What makes Saja different from other customer feedback tools?",
        description:
            "Saja distinguishes itself from other customer feedback tools through its industry-focused approach. Unlike other platforms, Saja provides pre-defined surveys tailored for specific industries, eliminating the need for you to create surveys from scratch. This approach also allows us to generate industry benchmark scores, providing valuable context for your feedback data. While real-time feedback is a common feature among feedback tools, our commitment to customer feedback sets us apart. Our interface is also customizable, allowing it to align seamlessly with your brand identity.",
    },
    {
        title: "How does Saja ensure data security?",
        description:
            "Saja takes data security very seriously. User login credentials are automatically encrypted by our system. This ensures that only the survey-manager can access their account. Furthermore, we maintain a strict privacy policy where we don't have access to your survey data. The benchmark scores we provide are aggregated at the industry level and cannot be traced back to any particular business. This approach ensures the confidentiality and security of your data while allowing you to benefit from industry-wide insights.",
    },
    {
        title: "How customizable is Saja to our specific needs?",
        description:
            "Saja is highly customizable. You can tailor the survey forms to match your brand theme, and the system can be configured to focus on the metrics that matter most to your business.",
    },
    {
        title: "Can Saja integrate with our existing CRM or other systems?",
        description:
            "While Saja is designed with flexibility in mind, direct integration with existing CRM or other systems has not been fully explored yet. However, Saja allows you to generate a survey link which can be shared through various communication channels such as email, SMS, WhatsApp, or chatbot. This method allows you to utilize Saja's capabilities within your existing systems. For more specific integration needs, we recommend reaching out to our team for further discussion.",
    },
    {
        title: "How quickly can we expect to see results after implementing Saja?",
        description:
            "While results can vary, many businesses start seeing improvements in customer satisfaction and feedback management within the first few weeks of using Saja.",
    },
    {
        title: "What kind of support does Saja offer?",
        description:
            "We offer comprehensive support to all our clients, including setup, training, and ongoing assistance. Our team is always ready to help you get the most out of Saja.",
    },
    {
        title: "How cost-effective is Saja?",
        description:
            "Saja is designed to provide excellent value. By improving customer satisfaction and feedback management, it can help increase repeat business and profitability, providing a strong return on investment.",
    },
    {
        title: "Can we trial Saja before making a commitment?",
        description:
            "Yes, we offer a trial period for you to experience the benefits of Saja firsthand. We're confident you'll see the value it can bring to your business.",
    },
      {
        title: "How does Saja assist in managing negative feedback?",
        description:
            "Saja provides real-time alerts for negative feedback, allowing your team to address issues promptly. This can help prevent negative publicity and improve public ratings.",
    },
];

export default function DynamicAccordion() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex((prev) => (prev === index ? null : index));
    };

    return (
        <div className="w-full max-w-4xl mx-auto space-y-4">
            {items.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        className="border border-gray-200 rounded-xl overflow-hidden"
                    >
                        <button
                            onClick={() => toggleAccordion(index)}
                            className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-gray-50 transition"
                        >
                            <h3 className="text-[18px] font-semibold text-[#2f2f2f]">
                                {item.title}
                            </h3>

                            <ChevronDown
                                className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""
                                    }`}
                            />
                        </button>

                        <div
                            className={`grid transition-all duration-300 ease-in-out ${isOpen
                                ? "grid-rows-[1fr] opacity-100"
                                : "grid-rows-[0fr] opacity-0"
                                }`}
                        >
                            <div className="overflow-hidden">
                                <div className="px-6 pb-5 text-[#5a5a5a] leading-7">
                                    {item.description}
                                </div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}