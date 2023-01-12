/* eslint-disable max-classes-per-file */

/**
 * 钱/价格/货币
 */
export abstract class Currency {
  abstract type: 'rmb' | 'btc' | 'usd' | 'and more'

  /**
   * 后端给过来的原始值应当是 string;
   * 前端使用 Decimal 或者 Dinero.js(或者其他建议), 便于计算;
   * 类型应当是所使用 lib 的类型, 暂以 string 代替;
   */
  abstract value: string
}

/**
 * 商品
 */
export abstract class Commodity {
  /**
   * number 也行, 可以随数据库值而定
   */
  abstract id: string

  abstract price: Currency

  abstract title: string

  abstract description: string

  /**
   * 留给子类扩展使用
   */
  abstract extra: unknown
}

/**
 * 钱包 的抽象类;
 * 站内的区块链钱包 和 对接的银行卡/支付宝/微信 应当都只是 Wallet 的一种实现;
 * 大部分参数都应该有默认值;
 */
export abstract class WalletCore {
  /**
   * 子类根据 id 自行初始化钱包
   */
  abstract init(id: string): this

  /**
   * number 也行, 可以随数据库值而定
   */
  abstract id: string

  abstract balances: {
    /**
     * 默认为 空数组, init 初始化时, 应当为该值填充一个 "main value"
     */
    value: Currency[]
    isLoading: boolean
    reload: () => Promise<Currency[]>
  }

  /**
   * 提现 和 存钱 应该都只是一种 transfer;
   * 站内的区块链钱包 和 对接的银行卡/支付宝/微信 应该都只是 Wallet 的一种实现;
   * 甚至购买, 也只是从 用户钱包 到 官方钱包 的一次 transfer;
   */
  abstract transfer(props: {
    to: WalletCore
    value: Currency
    /**
     * 留给子类扩展使用
     */
    extra: unknown
  }): Promise<boolean>
}

/**
 * 顾客/用户
 */
export abstract class Customer {
  /**
   * number 也行, 可以随数据库值而定
   */
  abstract id: string

  abstract purchase(commodity: Commodity): Promise<boolean>

  abstract shelve(commodity: Commodity): Promise<boolean>
}
