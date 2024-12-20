import { COLORS } from '../../constants/colors';

const Topics = () => {
  return (
    <section className="py-16 text-center">
      <h2 style={{ color: COLORS.black }} className="text-3xl font-semibold">What’s inside the book</h2>
      <p style={{ color: COLORS.black }} className=" mt-4 max-w-xl mx-auto">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <div className="mt-8 grid grid-cols-2 gap-4 max-w-xl mx-auto">
        {['Design Principles', 'UI Design', 'Typography', 'White Space', 'Visual Hierarchy', 'Color Theory'].map((topic, i) => (
          <div key={i} className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span style={{ color: COLORS.black }} className="">{topic}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Topics;
