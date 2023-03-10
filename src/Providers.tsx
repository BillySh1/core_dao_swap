import { light, ModalProvider } from '@pancakeswap/uikit'
import { Store } from '@reduxjs/toolkit'
import { Web3ReactProvider } from '@web3-react/core'
import { LanguageProvider } from 'contexts/Localization'
import { ToastsProvider } from 'contexts/ToastsContext'
import { fetchStatusMiddleware } from 'hooks/useSWRContract'
import { ThemeProvider as NextThemeProvider, useTheme as useNextTheme } from 'next-themes'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'
import { SWRConfig } from 'swr'
import { getLibrary } from 'utils/web3React'

const StyledThemeProvider = (props) => {
  const { resolvedTheme } = useNextTheme()
  return <ThemeProvider theme={light} {...props} />
}

const Providers: React.FC<{ store: Store }> = ({ children, store }) => {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Provider store={store}>
        <ToastsProvider>
          <NextThemeProvider>
            <StyledThemeProvider>
              <LanguageProvider>
                <SWRConfig
                  value={{
                    use: [fetchStatusMiddleware],
                  }}
                >
                  <ModalProvider>{children}</ModalProvider>
                </SWRConfig>
              </LanguageProvider>
            </StyledThemeProvider>
          </NextThemeProvider>
        </ToastsProvider>
      </Provider>
    </Web3ReactProvider>
  )
}

export default Providers
