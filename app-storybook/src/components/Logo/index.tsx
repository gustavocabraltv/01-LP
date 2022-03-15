import * as S from './styles'

export type  LogoProps = { 
  color?: '#1C34F3' | 'black',
  size?: 'normal' | 'large'
}

const Logo = ({color = '#1C34F3', size= 'normal'}: LogoProps) => (

  <S.Wrapper color={color} size={size}>
<svg role="img" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 158 48">
  <path d="M16.284 8.127c1.385.79 2.482 1.91 3.291 3.36.81 1.45 1.214 3.136 1.214 5.056s-.404 3.605-1.214 5.056c-.81 1.45-1.906 2.57-3.29 3.36-1.385.79-2.919 1.184-4.612 1.184-2.173 0-3.898-.65-5.176-1.952v8.31H0V7.358h6.198v1.75c1.215-1.44 3.036-2.166 5.485-2.166 1.694 0 3.227.395 4.601 1.184Zm-3.163 11.658c.735-.789 1.097-1.866 1.097-3.242s-.362-2.454-1.097-3.243c-.735-.79-1.672-1.184-2.812-1.184s-2.076.395-2.811 1.184c-.735.79-1.097 1.867-1.097 3.243s.362 2.453 1.097 3.242c.735.79 1.661 1.184 2.811 1.184 1.14 0 2.077-.394 2.812-1.184ZM23.121.5h6.507v25.461h-6.507V.5ZM81.795 7.69c1.065-.427 2.28-.64 3.653-.64v5.866c-.596-.064-1.086-.107-1.47-.107-1.394 0-2.48.374-3.269 1.131-.788.757-1.182 1.91-1.182 3.467v8.544h-6.508V7.359h6.199v2.229c.66-.843 1.523-1.472 2.577-1.899ZM103.17 9.044c1.63 1.419 2.45 3.584 2.45 6.517v10.4h-6.103V23.54c-.948 1.824-2.78 2.73-5.517 2.73-1.448 0-2.705-.255-3.76-.757-1.053-.501-1.852-1.194-2.395-2.058-.544-.864-.81-1.846-.81-2.955 0-1.77.682-3.147 2.034-4.128 1.353-.981 3.451-1.472 6.273-1.472h3.728c-.117-1.984-1.438-2.976-3.962-2.976-.895 0-1.81.15-2.726.427-.916.288-1.704.682-2.344 1.194l-2.204-4.458c1.033-.694 2.29-1.227 3.78-1.611a17.713 17.713 0 0 1 4.463-.565c3.089.01 5.464.714 7.093 2.133Zm-5.346 12.523c.575-.374.99-.907 1.246-1.622v-1.621h-2.833c-1.906 0-2.865.63-2.865 1.899 0 .576.224 1.034.66 1.386.437.342 1.034.523 1.79.523.756-.01 1.427-.192 2.002-.565ZM108.121.5h6.507v25.461h-6.507V.5Z" fill="currentColor"/>
  <path d="M123 22.815a3.002 3.002 0 0 0-3.003-3.008 2.98 2.98 0 0 0-2.663 1.632 1.501 1.501 0 0 0-.128.298c-.01.022-.01.032-.021.054-.032.085-.053.17-.085.266-.011.022-.011.054-.022.075-.021.085-.031.17-.042.256 0 .032-.011.053-.011.085-.01.118-.021.224-.021.342a3.002 3.002 0 0 0 3.355 2.986c.032 0 .064-.01.096-.01.085-.011.17-.032.255-.054a.31.31 0 0 1 .096-.021c.096-.021.181-.053.266-.085.022-.011.032-.011.054-.022.106-.042.213-.096.319-.149A3.029 3.029 0 0 0 123 22.815Z" fill="#F7BF34"/>
  <path d="M60.792 9.738c0-.214.01-.448.042-.694 0-.042.01-.096.021-.138l.011-.043a3.64 3.64 0 0 1 .096-.512c.01-.053.021-.096.032-.139a6.53 6.53 0 0 1 .17-.544l.011-.021c.01-.032.021-.053.032-.085.075-.182.15-.363.234-.534a9.068 9.068 0 0 0-1.193-.074 9.516 9.516 0 0 0-6.773 2.816l-2.567 2.549-.01-.01-3.877 3.882-.352.363-2.545 2.549c-.17.17-.362.33-.565.458l-.031.011-.022.021a3.62 3.62 0 0 1-1.928.555 3.557 3.557 0 0 1-2.012-.619 3.614 3.614 0 0 1-1.587-2.986c0-1.013.404-1.941 1.15-2.635a3.603 3.603 0 0 1 2.45-.97c.958 0 1.863.373 2.545 1.055l.692.694 4.228-4.235-.692-.693a9.517 9.517 0 0 0-6.773-2.816c-2.429 0-4.75.917-6.53 2.57l-.01.011a9.653 9.653 0 0 0-3.035 7.008 9.589 9.589 0 0 0 4.186 7.925l.02.011.129.096h.032a9.567 9.567 0 0 0 5.229 1.558c1.8 0 3.546-.502 5.07-1.462l.127-.085c.565-.363 1.097-.8 1.576-1.27l1.257-1.258.01-.01c.022-.022.043-.033.065-.054l7.998-8.01a3.575 3.575 0 0 1 2.545-1.057c.586 0 1.172.15 1.694.427l.149.085c-.82-.992-1.3-2.293-1.3-3.69Z" fill="currentColor"/>
  <path d="M66.832 13.183c.128 0 .255-.01.405-.022.032 0 .063-.01.095-.01h.022a2.29 2.29 0 0 0 .394-.086c.106-.032.213-.064.309-.106h.01c.022-.01.032-.01.054-.022.127-.053.255-.106.372-.17a3.447 3.447 0 0 0-1.661-6.464c-1.289 0-2.46.714-3.057 1.866a3.288 3.288 0 0 0-.149.342c-.01.01-.01.032-.021.042v.011c-.032.096-.064.203-.096.31-.01.02-.01.053-.021.085a2.745 2.745 0 0 0-.054.288v.021c0 .021-.01.053-.01.075-.022.138-.022.266-.022.394a3.432 3.432 0 0 0 3.43 3.446ZM67.437 15.572a3.035 3.035 0 0 0-3.823 1.941 3.723 3.723 0 0 1-2.11 2.283l-.084.032a3.196 3.196 0 0 1-.458.15 8.685 8.685 0 0 1-.32.063l-.085.01c-.01 0-.032 0-.043.012-.17.02-.309.032-.436.032a3.726 3.726 0 0 1-3.089-1.654l-4.313 4.32a9.758 9.758 0 0 0 7.402 3.403c.372 0 .745-.022 1.15-.075.117-.01.224-.032.309-.042h.032c.277-.043.554-.096.82-.16.106-.022.213-.054.309-.086.287-.074.564-.17.841-.277.075-.032.15-.053.213-.085.362-.15.714-.31 1.044-.502a9.75 9.75 0 0 0 4.558-5.525 3.02 3.02 0 0 0-1.917-3.84Z" fill="#F7BF34"/>
</svg>

  </S.Wrapper>
)

export default Logo