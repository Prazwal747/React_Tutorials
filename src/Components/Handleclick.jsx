const AppClick = () => {
  const COMPANY = ["GEEK", "for", "Geeks"];
  const handleClick = (company) => {
    alert(`you clicked on ${company}`);
  };

  return (
    <div>
      <ul>
        {COMPANY.map((company, index) => (
          <button key={index} onClick={() => handleClick(company)}>
            {company}
          </button>
        ))}
      </ul>
    </div>
  );
};

export default AppClick;
