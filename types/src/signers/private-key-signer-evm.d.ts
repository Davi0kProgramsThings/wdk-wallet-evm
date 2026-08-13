// This file has been automatically generated with jsdoc-to-d-ts
/**
 * @implements {ISignerEvm}
 * Signer that wraps a raw private key in a memory-safe buffer, exposing a minimal
 * interface for signing messages, transactions and typed data. This signer does
 * not support derivation and always represents a single account.
 */
export default class PrivateKeySignerEvm implements ISignerEvm {
    /**
     * Create a signer from a raw private key.
     *
     * @param {string|Uint8Array} privateKey - Hex string (with/without 0x) or raw key bytes.
     */
    constructor(privateKey: string|Uint8Array);
    /**
     * Whether this signer can derive child signers. Always false: a private-key signer is a
     * single standalone account and is bound directly to a wallet account.
     * @type {boolean}
     */
    get isDerivable(): boolean;
    /**
     * The account index. Always undefined for private key signers: a raw key has no
     * BIP-44 position, so reporting an index would be misleading.
     * @type {number|undefined}
     */
    get index(): number|undefined;
    /**
     * The derivation path. Always undefined for private key signers.
     * @type {string|undefined}
     */
    get path(): string|undefined;
    /**
     * The account's address.
     * @type {string}
     */
    get address(): string;
    /**
     * The account's key pair (private and public key buffers).
     * @type {KeyPair}
     */
    get keyPair(): KeyPair;
    /**
     * PrivateKeySignerEvm is not a hierarchical signer and cannot derive.
     * @returns {Promise<never>}
     * @throws {SignerError} Always — private-key signers do not support derivation.
     */
    derive(): Promise<never>;
    /** @returns {Promise<string>} */
    getAddress(): Promise<string>;
    /**
     * Signs a message.
     *
     * @param {string} message - The message to sign.
     * @returns {Promise<string>} The message's signature.
     */
    sign(message: string): Promise<string>;
    /**
     * Signs a transaction and returns the serialized signed transaction hex.
     *
     * @param {UnsignedEvmTransaction} unsignedTx - The unsigned transaction object.
     * @returns {Promise<string>}
     */
    signTransaction(unsignedTx: UnsignedEvmTransaction): Promise<string>;
    /**
     * Signs typed data according to EIP-712.
     *
     * @param {TypedData} typedData - The typed data to sign.
     * @returns {Promise<string>} The typed data signature.
     */
    signTypedData({ domain, types, message }: TypedData): Promise<string>;
    /**
     * Sign an ERC-7702 authorization tuple.
     * @param {AuthorizationRequest} auth
     * @returns {Promise<Authorization>}
     */
    signAuthorization(auth: AuthorizationRequest): Promise<Authorization>;
    /** Dispose secrets from memory. */
    dispose(): any;
}
export type UnsignedEvmTransaction = import('../utils/tx-populator-evm.js').UnsignedEvmTransaction;
export type KeyPair = import('@tetherto/wdk-wallet').KeyPair;
export type AuthorizationRequest = import('ethers').AuthorizationRequest;
export type Authorization = import('ethers').Authorization;
export type TypedData = import('../wallet-account-read-only-evm.js').TypedData;
import { ISignerEvm } from './seed-signer-evm.js';
