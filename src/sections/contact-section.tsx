import Section from "../components/section";

export default function ContactSection() {
    return (
        <Section title="Contact">
            <table className="table-auto mr-auto">
                <tbody>
                    <tr>
                        <td className="pr-4 py-2">Email:</td>
                        <td className="py-2 text-gray-500">abdulrehman31303@gmail.com</td>
                    </tr>
                    <tr>
                        <td className="pr-4 py-2">Phone/WhatsApp:</td>
                        <td className="py-2 text-gray-500">+966 (59) 3240783</td>
                    </tr>
                    {/* <tr>
                        <td className="pr-4 py-2">Whats App:</td>
                        <td className="py-2 text-gray-500">+92 (332) 5924246</td>
                    </tr> */}
                </tbody>
            </table>
        </Section>
    );
}