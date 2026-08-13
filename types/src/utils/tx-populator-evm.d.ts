// This file has been automatically generated with jsdoc-to-d-ts
export type AuthorizationLike = import('ethers').AuthorizationLike;
export type UnsignedEvmTransaction = {
    /*
     * The id of the chain the transaction targets.
     */
    chainId: number;
    /*
     * The sender's transaction count, used to order transactions.
     */
    nonce: number;
    /*
     * The sender's address.
     */
    from: string;
    /*
     * The recipient's address, or null for contract creation.
     */
    to: string|null;
    /*
     * The transaction's calldata as a hex string.
     */
    data: string;
    /*
     * The amount of native currency (in wei) to transfer.
     */
    value: number|bigint;
    /*
     * The EIP-2718 transaction type (0/1 legacy, 2 EIP-1559, 3 EIP-4844, 4 EIP-7702).
     */
    type: number;
    /*
     * The maximum amount of gas the transaction may consume.
     */
    gasLimit: number|bigint;
    /*
     * The gas price (in wei) for legacy (type 0/1) transactions.
     */
    gasPrice?: number|bigint;
    /*
     * The maximum total fee (in wei) per gas for EIP-1559 transactions.
     */
    maxFeePerGas?: number|bigint;
    /*
     * The maximum priority fee (in wei) per gas for EIP-1559 transactions.
     */
    maxPriorityFeePerGas?: number|bigint;
    /*
     * The EIP-2930 access list of addresses and storage keys.
     */
    accessList?: any[];
    /*
     * The maximum fee (in wei) per blob gas for EIP-4844 transactions.
     */
    maxFeePerBlobGas?: number|bigint;
    /*
     * The blobs to include in an EIP-4844 transaction.
     */
    blobs?: any[];
    /*
     * The versioned hashes of the EIP-4844 blobs.
     */
    blobVersionedHashes?: string[];
    /*
     * The EIP-7702 authorization tuples.
     */
    authorizationList?: AuthorizationLike[];
};
