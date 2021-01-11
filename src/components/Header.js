const headerStyles = {
  header: {
    padding: '20px 0',
    lineHeight: '2em',
  },
  headerOne: {
    fontSize: '25px',
    marginBottom: '15px',
  },
  paragraph: { fontSize: '19px' },
}

const Header = () => {
  return (
    <header style={headerStyles.header}>
      <h1 style={headerStyles.headerOne}>Simple Todo App</h1>
      <p style={headerStyles.paragraph}>
        Please add to-dos item(s) through the input field
      </p>
    </header>
  )
}

export default Header
