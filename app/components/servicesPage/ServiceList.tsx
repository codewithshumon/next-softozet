import ServiceListCard from "@/app/components/servicesPage/ServiceListCard";

const ServiceList = () => {
  return (
    <>
      <div
        className="h-[100vh] flex flex-row gap-5"
        style={{ width: `${(1 / 3) * 5 * 100}%` }}
      >
        <ServiceListCard
          title="Brand Identity Design"
          text="Your brand identity is your visual fingerprint. It's how
        customers recognize and remember your brand. A weak identity can
        cost you business. We can help you design a distinctive identity
        that makes you stand out and stick in customers' minds."
        />
        <ServiceListCard
          title="Corporate Identity Design"
          text="Your brand identity is your visual fingerprint. It's how
        customers recognize and remember your brand. A weak identity can
        cost you business. We can help you design a distinctive identity
        that makes you stand out and stick in customers' minds."
        />
        <ServiceListCard
          title="Brand Strategy"
          text="Your brand identity is your visual fingerprint. It's how
        customers recognize and remember your brand. A weak identity can
        cost you business. We can help you design a distinctive identity
        that makes you stand out and stick in customers' minds."
        />
        <ServiceListCard
          title="Motion Graphics Design"
          text="Your brand identity is your visual fingerprint. It's how
        customers recognize and remember your brand. A weak identity can
        cost you business. We can help you design a distinctive identity
        that makes you stand out and stick in customers' minds."
        />
        <ServiceListCard
          title="Graphic Design"
          text="Your brand identity is your visual fingerprint. It's how
        customers recognize and remember your brand. A weak identity can
        cost you business. We can help you design a distinctive identity
        that makes you stand out and stick in customers' minds."
        />
      </div>
    </>
  );
};

export default ServiceList;
