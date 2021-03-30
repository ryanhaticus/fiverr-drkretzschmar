import { useRef, useState } from 'react';

import { Transition } from '@headlessui/react';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const impressumRef = useRef(null);
  const topRef = useRef(null);
  const aviationRef = useRef(null);
  const mechRef = useRef(null);
  const conRef = useRef(null);
  return (
    <div className='min-h-screen bg-white'>
      {/* Nav */}
      <header>
        <div className='relative bg-white'>
          <div className='flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8'>
            <div className='flex justify-start lg:w-0 lg:flex-1'>
              <button
                onClick={() =>
                  topRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }>
                <span className='sr-only'>Dr. Kretzschmar</span>
                <img
                  ref={topRef}
                  className='h-8 w-auto sm:h-10'
                  src='/wrench.svg'
                  alt='Dr. Kretzschmar Logo'
                />
              </button>
            </div>
            <div className='-mr-2 -my-2 md:hidden'>
              <button
                type='button'
                onClick={() => setMenuOpen(true)}
                className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightBlue-500'
                aria-expanded='false'>
                <span className='sr-only'>Open menu</span>
                {/* Heroicon name: outline/menu */}
                <svg
                  className='h-6 w-6'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                  aria-hidden='true'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth='2'
                    d='M4 6h16M4 12h16M4 18h16'
                  />
                </svg>
              </button>
            </div>
            <nav className='hidden md:flex space-x-10'>
              <button className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Startseite
              </button>
              <button
                onClick={() =>
                  aviationRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Luftfahrt
              </button>
              <button
                onClick={() =>
                  mechRef.current.scrollIntoView({
                    behavior: 'smooth'
                  })
                }
                className='text-base font-medium text-gray-500 hover:text-gray-900'>
                Maschinen Und Anlagenbau
              </button>
            </nav>
          </div>

          {/*
            Mobile menu, show/hide based on mobile menu state.
    
            Entering: "duration-200 ease-out"
              From: "opacity-0 scale-95"
              To: "opacity-100 scale-100"
            Leaving: "duration-100 ease-in"
              From: "opacity-100 scale-100"
              To: "opacity-0 scale-95"
          */}
          <Transition
            show={menuOpen}
            enter='duration-200 ease-out'
            enterFrom='opacity-0 scale-95'
            enterTo='opacity-100 scale-100'
            leave='duration-100 ease-in'
            leaveFrom='opacity-100 scale-100'
            leaveTo='opacity-0 scale-95'>
            <div className='absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden'>
              <div className='rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50'>
                <div className='pt-5 pb-6 px-5'>
                  <div className='flex items-center justify-between'>
                    <div>
                      <img
                        className='h-8 w-auto'
                        src='/wrench.svg'
                        alt='Dr. Kretzschmar Logo'
                      />
                    </div>
                    <div className='-mr-2'>
                      <button
                        type='button'
                        onClick={() => setMenuOpen(false)}
                        className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-lightBlue-500'>
                        <span className='sr-only'>Close menu</span>
                        {/* Heroicon name: outline/x */}
                        <svg
                          className='h-6 w-6'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke='currentColor'
                          aria-hidden='true'>
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='2'
                            d='M6 18L18 6M6 6l12 12'
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <div className='mt-6'>
                    <nav className='grid grid-cols-1 gap-7'>
                      <button
                        onClick={() => {
                          setMenuOpen(false);
                        }}
                        className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-lightBlue-600 text-white'>
                          {/* Heroicon name: outline/inbox */}
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 576 512'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              d='M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z'
                            />
                          </svg>
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          Startseite
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          aviationRef.current.scrollIntoView({
                            behavior: 'smooth'
                          });
                          setMenuOpen(false);
                        }}
                        className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-lightBlue-600 text-white'>
                          {/* Heroicon name: outline/inbox */}
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 576 512'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              d='M480 192H365.71L260.61 8.06A16.014 16.014 0 0 0 246.71 0h-65.5c-10.63 0-18.3 10.17-15.38 20.39L214.86 192H112l-43.2-57.6c-3.02-4.03-7.77-6.4-12.8-6.4H16.01C5.6 128-2.04 137.78.49 147.88L32 256 .49 364.12C-2.04 374.22 5.6 384 16.01 384H56c5.04 0 9.78-2.37 12.8-6.4L112 320h102.86l-49.03 171.6c-2.92 10.22 4.75 20.4 15.38 20.4h65.5c5.74 0 11.04-3.08 13.89-8.06L365.71 320H480c35.35 0 96-28.65 96-64s-60.65-64-96-64z'
                            />
                          </svg>
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          Luftfahrt
                        </div>
                      </button>
                      <button
                        onClick={() => {
                          mechRef.current.scrollIntoView({
                            behavior: 'smooth'
                          });
                          setMenuOpen(false);
                        }}
                        className='-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50'>
                        <div className='flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-lightBlue-600 text-white'>
                          {/* Heroicon name: outline/inbox */}
                          <svg
                            className='h-6 w-6'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 576 512'
                            stroke='currentColor'
                            aria-hidden='true'>
                            <path
                              xmlns='http://www.w3.org/2000/svg'
                              fill='currentColor'
                              d='M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z'
                            />
                          </svg>
                        </div>
                        <div className='ml-4 text-base font-medium text-gray-900'>
                          Maschinen Und Anlagenbau
                        </div>
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </Transition>
        </div>
      </header>

      <main>
        <div>
          {/* Hero */}
          <div className='relative pb-4'>
            <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100'></div>
            <div className='max-w-7xl mx-auto sm:px-6 lg:px-8'>
              <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
                <div className='absolute inset-0'>
                  <img
                    className='h-full w-full object-cover'
                    src='/gears.jpeg'
                    alt='Gears'
                  />
                  <div
                    className='absolute inset-0 bg-lightBlue-700'
                    style={{ mixBlendMode: 'multiply' }}></div>
                </div>
                <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
                  <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl'>
                    <span className='block text-white'>Ingenieurbüro</span>
                    <span className='block text-lightBlue-200'>
                      Dr. Kretzschmar
                    </span>
                  </h1>
                  <p className='mt-6 max-w-lg mx-auto text-center text-xl text-lightBlue-200 sm:max-w-3xl'>
                    Sachverständiger für Strömungstechnik und deren Anwendungen
                    in der Luftfahrt und im Maschinen- und Anlagenbau.
                  </p>
                  <div className='mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center'>
                    <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                      <button
                        onClick={() =>
                          impressumRef.current.scrollIntoView({
                            behavior: 'smooth'
                          })
                        }
                        className='w-full md:w-auto flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-lightBlue-700 bg-white hover:bg-lightBlue-50 sm:px-8'>
                        Impressum
                      </button>
                      <button
                        onClick={() =>
                          conRef.current.scrollIntoView({
                            behavior: 'smooth'
                          })
                        }
                        className='w-full md:w-auto flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-lightBlue-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8'>
                        Kontakt
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Impressum */}
        <div ref={impressumRef} className='bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen'></div>
            <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
              <div>
                <h2 className='text-base text-lightBlue-600 font-semibold tracking-wide uppercase'>
                  Impressum
                </h2>
                <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Dr. Kretzschmar
                </h3>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:row-start-1 lg:col-start-2'>
                <svg
                  className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                  <figure>
                    <div className='aspect-w-12 aspect-h-12 lg:aspect-h-7 lg:aspect-none'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src='/photo.jpg'
                        alt='Dr. Kretzschmar'
                        width='1184'
                        height='1376'
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='prose prose-lightBlue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                  <p>
                    In fünfundvierzig Jahren erworbene Berufserfahrung in
                    leitenden Stellungen in Forschung und Industrie
                  </p>
                  <p>
                    Nebenberufliche Lehrtätigkeit in verschiedenen Fächern an
                    Hochschulen
                  </p>
                  <p>
                    Inhaber eines Berufsflugzeugführerscheins mit vielen
                    Lehrberechtigungen
                  </p>

                  <p>
                    Der Gründer und heutige “Senior Experte“ des IBK befaßt sich
                    hauptsächlich mit dem Erstellen technischer Gutachten für
                    Gerichte sowie industrielle und private Auftraggeber.
                  </p>
                  <p>
                    Für Berechnungen und Laborversuche im Zusammenhang mit
                    diesen Arbeiten stehen ihm moderne Rechner, umfangreiche
                    aufwendige Software und das IBK-eigene Labor zur Verfügung.
                  </p>
                  <p>
                    Auf Wunsch des Auftraggebers werden die Berichte in einer
                    der Sprachen Deutsch, Französisch, Englisch oder Italienisch
                    verfaßt.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Luftfahrt */}
        <div ref={aviationRef} className='bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
              <div className='col-start-2'>
                <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Lufthart
                </h3>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:row-start-1 lg:col-start-1'>
                <svg
                  className='hidden lg:block absolute top-0 -mt-20 -ml-20'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                  <figure>
                    <div className='rounded-lg aspect-w-12 aspect-h-7 lg:aspect-none'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src='/aviation.jpeg'
                        alt='Luftfahrt'
                        width='800'
                        height='750'
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='text-base text-gray-500 max-w-prose mx-auto lg:max-w-none'>
                  <p>Lufthart placeholder text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Maschinen Und Anlagenbau */}
        <div ref={mechRef} className='bg-white overflow-hidden'>
          <div className='relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8'>
            <div className='hidden lg:block  absolute top-0 bottom-0 left-3/4 w-screen'></div>
            <div className='mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none'>
              <div>
                <h3 className='mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl'>
                  Maschinen Und Anlagenbau
                </h3>
              </div>
            </div>
            <div className='mt-8 lg:grid lg:grid-cols-2 lg:gap-8'>
              <div className='relative lg:row-start-1 lg:col-start-2'>
                <svg
                  className='hidden lg:block absolute top-0 right-0 -mt-20 -mr-20'
                  width='404'
                  height='384'
                  fill='none'
                  viewBox='0 0 404 384'
                  aria-hidden='true'>
                  <defs>
                    <pattern
                      id='de316486-4a29-4312-bdfc-fbce2132a2c1'
                      x='0'
                      y='0'
                      width='20'
                      height='20'
                      patternUnits='userSpaceOnUse'>
                      <rect
                        x='0'
                        y='0'
                        width='4'
                        height='4'
                        className='text-gray-200'
                        fill='currentColor'
                      />
                    </pattern>
                  </defs>
                  <rect
                    width='404'
                    height='384'
                    fill='url(#de316486-4a29-4312-bdfc-fbce2132a2c1)'
                  />
                </svg>
                <div className='relative text-base mx-auto max-w-prose lg:max-w-none'>
                  <figure>
                    <div className='aspect-w-12 aspect-h-7 lg:aspect-none'>
                      <img
                        className='rounded-lg shadow-lg object-cover object-center'
                        src='/plant.jpeg'
                        alt='Maschinen Und Anlagenbau'
                        width='1184'
                        height='1376'
                      />
                    </div>
                  </figure>
                </div>
              </div>
              <div className='mt-8 lg:mt-0'>
                <div className='prose prose-lightBlue text-gray-500 mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1'>
                  <p>Maschinen Und Anlagenbau placeholder text</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact */}
        <div ref={conRef}>
          <div className='max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8'>
            <div className='relative bg-white shadow-xl'>
              <h2 className='sr-only'>Contact us</h2>

              <div>
                <div className='rounded-lg relative overflow-hidden py-10 px-6 bg-lightBlue-700 sm:px-10 xl:p-12'>
                  <div
                    className='absolute inset-0 pointer-events-none sm:hidden'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width='343'
                      height='388'
                      viewBox='0 0 343 388'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z'
                        fill='url(#linear1)'
                        fill-opacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear1'
                          x1='254.553'
                          y1='107.554'
                          x2='961.66'
                          y2='814.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff'></stop>
                          <stop
                            offset='1'
                            stopColor='#fff'
                            stopOpacity='0'></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width='359'
                      height='339'
                      viewBox='0 0 359 339'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z'
                        fill='url(#linear2)'
                        fill-opacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear2'
                          x1='192.553'
                          y1='28.553'
                          x2='899.66'
                          y2='735.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff'></stop>
                          <stop
                            offset='1'
                            stopColor='#fff'
                            stopOpacity='0'></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div
                    className='hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block'
                    aria-hidden='true'>
                    <svg
                      className='absolute inset-0 w-full h-full'
                      width='160'
                      height='678'
                      viewBox='0 0 160 678'
                      fill='none'
                      preserveAspectRatio='xMidYMid slice'
                      xmlns='http://www.w3.org/2000/svg'>
                      <path
                        d='M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z'
                        fill='url(#linear3)'
                        fill-opacity='.1'
                      />
                      <defs>
                        <linearGradient
                          id='linear3'
                          x1='192.553'
                          y1='325.553'
                          x2='899.66'
                          y2='1032.66'
                          gradientUnits='userSpaceOnUse'>
                          <stop stopColor='#fff'></stop>
                          <stop
                            offset='1'
                            stopColor='#fff'
                            stopOpacity='0'></stop>
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <h3 className='text-lg font-medium text-white'>Kontakt</h3>
                  <p className='mt-6 text-base text-lightBlue-50 max-w-3xl'>
                    Kontakt placeholder text
                  </p>
                  <dl className='mt-8 space-y-6'>
                    <dt>
                      <span className='sr-only'>Telefonnummer</span>
                    </dt>
                    <dd className='flex text-base text-lightBlue-50'>
                      {/* Heroicon name: outline/phone */}
                      <svg
                        className='flex-shrink-0 w-6 h-6 text-lightBlue-200'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'
                        />
                      </svg>
                      <span className='ml-3'>+49 (000) 000-0000</span>
                    </dd>
                    <dt>
                      <span className='sr-only'>Email</span>
                    </dt>
                    <dd className='flex text-base text-lightBlue-50'>
                      {/* Heroicon name: outline/mail */}
                      <svg
                        className='flex-shrink-0 w-6 h-6 text-lightBlue-200'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        aria-hidden='true'>
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          strokeWidth='2'
                          d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
                        />
                      </svg>
                      <span className='ml-3'>email@placeholder.com</span>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer className='bg-white'>
        <div className='max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
          <div className='mt-8 md:mt-0 md:order-1'>
            <p className='text-center text-base text-gray-400'>
              &copy; {new Date().getFullYear()} Dr. Kretzschmar. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
