import React from 'react';
import './App.scss';
import Web3 from 'web3';
import is_selected from './images/is_selected.svg';
import exchange from './images/exchange.svg';
import exchange_mob from './images/exchange_mob.svg';
import show_tips from './images/show-tips.svg';
import imBTC from './images/imBTC.svg';
import HBTC from './images/HBTC.svg';
import USDx from './images/USDx.svg';
import USDT from './images/USDT.svg';
import WETH from './images/WETH.svg';
import WBTC from './images/WBTC.svg';
import DAI from './images/DAI.svg';
import HUSD from './images/HUSD.svg';
import BUSD from './images/BUSD.svg';
import logo_xswap from './images/logo-dforce.svg';
import close from './images/close.svg';
import close_new from './images/close-new.svg';
// png
import usdc from './images/usdc.png';
import tusd from './images/tusd.png';
import pax from './images/pax.png';
// add i18n.
import { IntlProvider, FormattedMessage } from 'react-intl';
import en_US from './language/en_US.js';
import zh_CN from './language/zh_CN';
import History from './component/history';
import Top from './component/top';
import Twitter from './images/Twitter.svg';
import Medium from './images/Medium.svg';
import Reddit from './images/Reddit.svg';
import Discord from './images/Discord.svg';
import LinkedIn from './images/LinkedIn.svg';
import Youtube from './images/Youtube.svg';
import Telegram from './images/Telegram.svg';
import erweima from './images/erweima.png';
import weixin from './images/weixin.svg';
import arrow_u from './images/up.svg';
import arrow_d from './images/arrow_d.svg';


export default class App extends React.Component {
  constructor(porps) {
    super(porps);

    this.state = {
      data_is_ok: false,
      token: {
        WETH: WETH,
        imBTC: imBTC,
        USDT: USDT,
        USDx: USDx,
        HBTC: HBTC,
        USDC: usdc,
        TUSD: tusd,
        PAX: pax,
        WBTC: WBTC,
        DAI: DAI,
        WBTC: WBTC,
        HUSD: HUSD,
        BUSD: BUSD
      },
      decimals: {
        HUSD: 8,
        BUSD: 18,
        USDx: 18,
        TUSD: 18,
        PAX: 18,
        DAI: 18,
        USDC: 6,
        USDT: 6,
        imBTC: 8,
        HBTC: 18,
        WBTC: 8
      },
      cur_language: navigator.language === 'zh-CN' ? '中文' : 'English',
      show_left_more_token: false,
      cur_send_addr: 'USDT',
      cur_recive_addr: 'USDx',
      is_stable_coin_send: true,
      is_stable_coin_receive: true,
      showonly: false,
      meun1: true,
      meun2: true
    }

    this.new_web3 = window.new_web3 = new Web3(Web3.givenProvider || null);
    this.bn = this.new_web3.utils.toBN;
    this.placeholder = navigator.language === 'zh-CN' ? '输入数量' : 'Amount';
  }


  render() {
    return (
      <IntlProvider locale={'en'} messages={this.state.cur_language === '中文' ? zh_CN : en_US} >
        {/* mobile tips */}
        <div className={this.state.showonly ? 'mobile-only' : 'disn'}>
          <div className='wrap-mob'>
            <div className='only-left'>
              <img src={logo_xswap} alt='' />
            </div>
            <div className='only-right'>
              <img src={close_new} alt='' onClick={() => { this.setState({ showonly: false }) }} />
            </div>
            <div className='clear'></div>
          </div>
          <div className='only-kong'></div>

          <h1 onClick={() => { this.setState({ meun1: !this.state.meun1 }) }}>
            {/* <FormattedMessage id='Protocols' /> */}
            dForce Stablecoin
            <span>
              <img src={this.state.meun1 ? arrow_u : arrow_d} />
            </span>
          </h1>
          <div className={this.state.meun1 ? 'meun1' : 'only1px'}>
            <div className='m-item'>
              <a href='https://usdx.dforce.network/' target='_blank' rel="noopener noreferrer">
                <span className='title'>USDx</span>
              </a>
              <span className='details'>Portal</span>
            </div>

            <div className='m-item'>
              <a href='https://dip001.dforce.network/' target='_blank' rel="noopener noreferrer">
                <span className='title'>DIP001</span>
              </a>
              <span className='details'>Collateral lending dashboard</span>
            </div>
          </div>


          <h1 onClick={() => { this.setState({ meun2: !this.state.meun2 }) }}>
            {/* <FormattedMessage id='Developers' /> */}
            Yield Market
            <span>
              <img src={this.state.meun2 ? arrow_u : arrow_d} />
            </span>
          </h1>
          <div className={this.state.meun2 ? 'meun1' : 'only1px'}>
            <div className='m-item'>
              <a href='https://www.lendf.me/' target='_blank' rel="noopener noreferrer">
                <span className='title'>LendfMe</span>
              </a>
              <span className='details'>Lend and Borrow</span>
            </div>
          </div>
        </div>


        <div className='wrap-mob'>
          <div className='only-left'>
            <img src={logo_xswap} alt='' />
          </div>
          <div className='only-right'>
            <img src={close} alt='' onClick={() => { this.setState({ showonly: true }) }} />
          </div>
          <div className='clear'></div>
        </div>
        <Top
          account={this.state.my_account}
          net_type={this.state.net_type}
          fn_connect={() => { }}
        />
        <div className="App">
          {/* left */}
          <div className="other-tokens float-left">
            <div className="token-balance-left">
              <FormattedMessage id='send' />
              <span className="my-balance">{'···'}</span>
              <span className="my-balance-title">
                <FormattedMessage id='balance' />:
              </span>
            </div>

            <div className="other-tokens-left">
              <button>
                <img alt='' className="token-logo" src={this.state.token[this.state.cur_send_addr]} />
                <span className="token-title">
                  {this.state.cur_send_addr}
                </span>
                <span className={this.state.show_left_more_token ? "token-tips-re" : "token-tips"}></span>
              </button>
            </div>

            <div className="other-tokens-right">
              <input value={this.state.side_A_amount || ''} placeholder={this.placeholder} />
              <span className="other-tokens-right-max">MAX</span>
            </div>

            <div className="other-tokens-rate">
              1 {this.state.cur_send_addr} = {' '}
              {'···'}
              {' ' + this.state.cur_recive_addr}
              {'(including fees)'}
            </div>
            <div className="other-tokens-rate-p">
              {'Fee: 0.00%'}
            </div>
          </div>

          <div className="exchange">
            <img alt='' className='exc' src={exchange} />
            <img alt='' className='exc_mob' src={exchange_mob} />
          </div>

          {/* right */}
          <div className="other-tokens float-right">
            <div className="token-balance-left">
              <FormattedMessage id='recive' />
              <span className="my-balance">{'···'}</span>
              <span className="my-balance-title">
                <FormattedMessage id='balance' />:
              </span>
            </div>

            <div className="other-tokens-left">
              <button>
                <img alt='' className="token-logo" src={this.state.token[this.state.cur_recive_addr]} />
                <span className="token-title">
                  {this.state.cur_recive_addr}
                </span>
                <span className={this.state.show_right_more_token ? "token-tips-re" : "token-tips"}></span>
              </button>
            </div>
            <div className="other-tokens-right">
              <input
                value={this.state.side_B_amount || ''}
                // disabled='disabled'
                placeholder={this.placeholder}
              />
            </div>
          </div>

          <div className='clear'></div>

          <div
            className={this.state.is_wap_enable ? "btn-wrap" : "btn-wrap-disable"}
          >
            <FormattedMessage id='swap' />
          </div>

          <History
            account={this.state.my_account}
            net_type={this.state.net_type}
            new_web3={this.new_web3}
            load_new_history={this.state.load_new_history}
            cur_language={this.state.cur_language}
          />


          {/* foot */}
          <div className="foot">
            <div className="foot-item">
              <div className="foot-item-title">
                <FormattedMessage id='Resource' />
              </div>
              <div className="foot-item-content">
                <a href='https://github.com/dforce-network/xswap.git' target='_blank' rel="noopener noreferrer">
                  GitHub
                </a>
              </div>
              <div className="foot-item-content">
                <a href='https://github.com/dforce-network/xswap.git' target='_blank' rel="noopener noreferrer">
                  FAQ
                </a>
              </div>
            </div>

            <div className="foot-item">
              <div className="foot-item-title">
                <FormattedMessage id='Community' />
              </div>
              <div className="foot-item-content icom-a">
                <a href='https://twitter.com/dForcenet' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Twitter} />
                </a>
                <a href='https://t.me/dforcenet' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Telegram} />
                </a>
                <a href='https://medium.com/dforcenet' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Medium} />
                </a>
                <a href='https://www.reddit.com/r/dForceNetwork' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Reddit} />
                </a>
                <a href='https://discord.gg/Gbtd3MR' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Discord} />
                </a>
                <a href='https://www.linkedin.com/company/dforce-network' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={LinkedIn} />
                </a>
                <a href='https://www.youtube.com/channel/UCM6Vgoc-BhFGG11ZndUr6Ow' target='_blank' rel="noopener noreferrer">
                  <img alt='' src={Youtube} />
                </a>
                {
                  this.state.cur_language === '中文' &&
                  <span className='weixin-img-wrap'>
                    <img alt='' src={weixin} />
                    <img alt='' className='weixin-img' src={erweima} />
                  </span>
                }
              </div>

              <div className='footer-right-fixed'>
                <div className='fixed1'>
                  {
                    this.state.cur_language
                  }
                </div>
                <span className='fixed-img'>
                  <img alt='' src={arrow_u} />
                </span>
                <div className='fixed2'>
                  <ul>
                    <li onClick={() => { this.setState({ cur_language: '中文' }) }}>{'中文'}</li>
                    <li onClick={() => { this.setState({ cur_language: 'English' }) }}>{'English'}</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="foot-item padding-left20">
              <div className="foot-item-title">
                <FormattedMessage id='Contract_US' />
              </div>
              <div className="foot-item-content">
                contacts@dforce.network
              </div>
              <div className="foot-item-content">
                bd@dforce.network
              </div>
              <div className="foot-item-content">
                tech@dforce.network
              </div>
            </div>
            <div className="clear"></div>
          </div>


        </div>
      </IntlProvider>
    )
  }
}