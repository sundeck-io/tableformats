const License = () => {
  return (
    <p  {...{ 'xmlns': 'cc="http://creativecommons.org/ns#"', 'xmlns:dct': "http://purl.org/dc/terms/" }}>
      <a property="dct:title" rel="cc:attributionURL" href="https://tableformats.sundeck.io">
        Lakehouse Table Format Rundown</a> by <a rel="cc:attributionURL dct:creator" property="cc:attributionName" href="https://www.linkedin.com/in/jacquesnadeau/">Jacques Nadeau</a> is licensed under <a href="http://creativecommons.org/licenses/by-sa/4.0/" target="_blank" rel="license noopener noreferrer" style={{ display: 'inline-block' }}>CC BY-SA 4.0
        <img alt="license" style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }} src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" />
        <img alt="license" style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }} src="https://mirrors.creativecommons.org/presskit/icons/by.svg" />
        <img alt="license" style={{ height: '22px', marginLeft: '3px', verticalAlign: 'text-bottom' }} src="https://mirrors.creativecommons.org/presskit/icons/sa.svg" />
      </a>
    </p>
  )
}

export default License;