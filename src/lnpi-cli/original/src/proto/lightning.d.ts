import * as $protobuf from "protobufjs";
/** Namespace lnrpc. */
export namespace lnrpc {

    /** Represents a WalletUnlocker */
    class WalletUnlocker extends $protobuf.rpc.Service {

        /**
         * Constructs a new WalletUnlocker service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new WalletUnlocker service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): WalletUnlocker;

        /**
         * GenSeed is the first method that should be used to instantiate a new lnd
         * instance. This method allows a caller to generate a new aezeed cipher seed
         * given an optional passphrase. If provided, the passphrase will be necessary
         * to decrypt the cipherseed to expose the internal wallet seed.
         *
         * Once the cipherseed is obtained and verified by the user, the InitWallet
         * method should be used to commit the newly generated seed, and create the
         * wallet.
         * @param request GenSeedRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GenSeedResponse
         */
        public genSeed(request: lnrpc.IGenSeedRequest, callback: lnrpc.WalletUnlocker.GenSeedCallback): void;

        /**
         * GenSeed is the first method that should be used to instantiate a new lnd
         * instance. This method allows a caller to generate a new aezeed cipher seed
         * given an optional passphrase. If provided, the passphrase will be necessary
         * to decrypt the cipherseed to expose the internal wallet seed.
         *
         * Once the cipherseed is obtained and verified by the user, the InitWallet
         * method should be used to commit the newly generated seed, and create the
         * wallet.
         * @param request GenSeedRequest message or plain object
         * @returns Promise
         */
        public genSeed(request: lnrpc.IGenSeedRequest): Promise<lnrpc.GenSeedResponse>;

        /**
         * InitWallet is used when lnd is starting up for the first time to fully
         * initialize the daemon and its internal wallet. At the very least a wallet
         * password must be provided. This will be used to encrypt sensitive material
         * on disk.
         *
         * In the case of a recovery scenario, the user can also specify their aezeed
         * mnemonic and passphrase. If set, then the daemon will use this prior state
         * to initialize its internal wallet.
         *
         * Alternatively, this can be used along with the GenSeed RPC to obtain a
         * seed, then present it to the user. Once it has been verified by the user,
         * the seed can be fed into this RPC in order to commit the new wallet.
         * @param request InitWalletRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and InitWalletResponse
         */
        public initWallet(request: lnrpc.IInitWalletRequest, callback: lnrpc.WalletUnlocker.InitWalletCallback): void;

        /**
         * InitWallet is used when lnd is starting up for the first time to fully
         * initialize the daemon and its internal wallet. At the very least a wallet
         * password must be provided. This will be used to encrypt sensitive material
         * on disk.
         *
         * In the case of a recovery scenario, the user can also specify their aezeed
         * mnemonic and passphrase. If set, then the daemon will use this prior state
         * to initialize its internal wallet.
         *
         * Alternatively, this can be used along with the GenSeed RPC to obtain a
         * seed, then present it to the user. Once it has been verified by the user,
         * the seed can be fed into this RPC in order to commit the new wallet.
         * @param request InitWalletRequest message or plain object
         * @returns Promise
         */
        public initWallet(request: lnrpc.IInitWalletRequest): Promise<lnrpc.InitWalletResponse>;

        /**
         * lncli: `unlock`
         * UnlockWallet is used at startup of lnd to provide a password to unlock
         * the wallet database.
         * @param request UnlockWalletRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UnlockWalletResponse
         */
        public unlockWallet(request: lnrpc.IUnlockWalletRequest, callback: lnrpc.WalletUnlocker.UnlockWalletCallback): void;

        /**
         * lncli: `unlock`
         * UnlockWallet is used at startup of lnd to provide a password to unlock
         * the wallet database.
         * @param request UnlockWalletRequest message or plain object
         * @returns Promise
         */
        public unlockWallet(request: lnrpc.IUnlockWalletRequest): Promise<lnrpc.UnlockWalletResponse>;

        /**
         * lncli: `changepassword`
         * ChangePassword changes the password of the encrypted wallet. This will
         * automatically unlock the wallet database if successful.
         * @param request ChangePasswordRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChangePasswordResponse
         */
        public changePassword(request: lnrpc.IChangePasswordRequest, callback: lnrpc.WalletUnlocker.ChangePasswordCallback): void;

        /**
         * lncli: `changepassword`
         * ChangePassword changes the password of the encrypted wallet. This will
         * automatically unlock the wallet database if successful.
         * @param request ChangePasswordRequest message or plain object
         * @returns Promise
         */
        public changePassword(request: lnrpc.IChangePasswordRequest): Promise<lnrpc.ChangePasswordResponse>;
    }

    namespace WalletUnlocker {

        /**
         * Callback as used by {@link lnrpc.WalletUnlocker#genSeed}.
         * @param error Error, if any
         * @param [response] GenSeedResponse
         */
        type GenSeedCallback = (error: (Error|null), response?: lnrpc.GenSeedResponse) => void;

        /**
         * Callback as used by {@link lnrpc.WalletUnlocker#initWallet}.
         * @param error Error, if any
         * @param [response] InitWalletResponse
         */
        type InitWalletCallback = (error: (Error|null), response?: lnrpc.InitWalletResponse) => void;

        /**
         * Callback as used by {@link lnrpc.WalletUnlocker#unlockWallet}.
         * @param error Error, if any
         * @param [response] UnlockWalletResponse
         */
        type UnlockWalletCallback = (error: (Error|null), response?: lnrpc.UnlockWalletResponse) => void;

        /**
         * Callback as used by {@link lnrpc.WalletUnlocker#changePassword}.
         * @param error Error, if any
         * @param [response] ChangePasswordResponse
         */
        type ChangePasswordCallback = (error: (Error|null), response?: lnrpc.ChangePasswordResponse) => void;
    }

    /** Properties of a GenSeedRequest. */
    interface IGenSeedRequest {

        /**
         * aezeed_passphrase is an optional user provided passphrase that will be used
         * to encrypt the generated aezeed cipher seed.
         */
        aezeedPassphrase?: (Uint8Array|null);

        /**
         * seed_entropy is an optional 16-bytes generated via CSPRNG. If not
         * specified, then a fresh set of randomness will be used to create the seed.
         */
        seedEntropy?: (Uint8Array|null);
    }

    /** Represents a GenSeedRequest. */
    class GenSeedRequest implements IGenSeedRequest {

        /**
         * Constructs a new GenSeedRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGenSeedRequest);

        /**
         * aezeed_passphrase is an optional user provided passphrase that will be used
         * to encrypt the generated aezeed cipher seed.
         */
        public aezeedPassphrase: Uint8Array;

        /**
         * seed_entropy is an optional 16-bytes generated via CSPRNG. If not
         * specified, then a fresh set of randomness will be used to create the seed.
         */
        public seedEntropy: Uint8Array;

        /**
         * Creates a new GenSeedRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenSeedRequest instance
         */
        public static create(properties?: lnrpc.IGenSeedRequest): lnrpc.GenSeedRequest;

        /**
         * Encodes the specified GenSeedRequest message. Does not implicitly {@link lnrpc.GenSeedRequest.verify|verify} messages.
         * @param message GenSeedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGenSeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GenSeedRequest message, length delimited. Does not implicitly {@link lnrpc.GenSeedRequest.verify|verify} messages.
         * @param message GenSeedRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGenSeedRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenSeedRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GenSeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GenSeedRequest;

        /**
         * Decodes a GenSeedRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GenSeedRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GenSeedRequest;

        /**
         * Verifies a GenSeedRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GenSeedRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenSeedRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GenSeedRequest;

        /**
         * Creates a plain object from a GenSeedRequest message. Also converts values to other types if specified.
         * @param message GenSeedRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GenSeedRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenSeedRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GenSeedResponse. */
    interface IGenSeedResponse {

        /**
         * cipher_seed_mnemonic is a 24-word mnemonic that encodes a prior aezeed
         * cipher seed obtained by the user. This field is optional, as if not
         * provided, then the daemon will generate a new cipher seed for the user.
         * Otherwise, then the daemon will attempt to recover the wallet state linked
         * to this cipher seed.
         */
        cipherSeedMnemonic?: (string[]|null);

        /**
         * enciphered_seed are the raw aezeed cipher seed bytes. This is the raw
         * cipher text before run through our mnemonic encoding scheme.
         */
        encipheredSeed?: (Uint8Array|null);
    }

    /** Represents a GenSeedResponse. */
    class GenSeedResponse implements IGenSeedResponse {

        /**
         * Constructs a new GenSeedResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGenSeedResponse);

        /**
         * cipher_seed_mnemonic is a 24-word mnemonic that encodes a prior aezeed
         * cipher seed obtained by the user. This field is optional, as if not
         * provided, then the daemon will generate a new cipher seed for the user.
         * Otherwise, then the daemon will attempt to recover the wallet state linked
         * to this cipher seed.
         */
        public cipherSeedMnemonic: string[];

        /**
         * enciphered_seed are the raw aezeed cipher seed bytes. This is the raw
         * cipher text before run through our mnemonic encoding scheme.
         */
        public encipheredSeed: Uint8Array;

        /**
         * Creates a new GenSeedResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GenSeedResponse instance
         */
        public static create(properties?: lnrpc.IGenSeedResponse): lnrpc.GenSeedResponse;

        /**
         * Encodes the specified GenSeedResponse message. Does not implicitly {@link lnrpc.GenSeedResponse.verify|verify} messages.
         * @param message GenSeedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGenSeedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GenSeedResponse message, length delimited. Does not implicitly {@link lnrpc.GenSeedResponse.verify|verify} messages.
         * @param message GenSeedResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGenSeedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenSeedResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GenSeedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GenSeedResponse;

        /**
         * Decodes a GenSeedResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GenSeedResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GenSeedResponse;

        /**
         * Verifies a GenSeedResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GenSeedResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GenSeedResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GenSeedResponse;

        /**
         * Creates a plain object from a GenSeedResponse message. Also converts values to other types if specified.
         * @param message GenSeedResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GenSeedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GenSeedResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitWalletRequest. */
    interface IInitWalletRequest {

        /**
         * wallet_password is the passphrase that should be used to encrypt the
         * wallet. This MUST be at least 8 chars in length. After creation, this
         * password is required to unlock the daemon.
         */
        walletPassword?: (Uint8Array|null);

        /**
         * cipher_seed_mnemonic is a 24-word mnemonic that encodes a prior aezeed
         * cipher seed obtained by the user. This may have been generated by the
         * GenSeed method, or be an existing seed.
         */
        cipherSeedMnemonic?: (string[]|null);

        /**
         * aezeed_passphrase is an optional user provided passphrase that will be used
         * to encrypt the generated aezeed cipher seed.
         */
        aezeedPassphrase?: (Uint8Array|null);

        /**
         * recovery_window is an optional argument specifying the address lookahead
         * when restoring a wallet seed. The recovery window applies to each
         * invdividual branch of the BIP44 derivation paths. Supplying a recovery
         * window of zero indicates that no addresses should be recovered, such after
         * the first initialization of the wallet.
         */
        recoveryWindow?: (number|null);
    }

    /** Represents an InitWalletRequest. */
    class InitWalletRequest implements IInitWalletRequest {

        /**
         * Constructs a new InitWalletRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IInitWalletRequest);

        /**
         * wallet_password is the passphrase that should be used to encrypt the
         * wallet. This MUST be at least 8 chars in length. After creation, this
         * password is required to unlock the daemon.
         */
        public walletPassword: Uint8Array;

        /**
         * cipher_seed_mnemonic is a 24-word mnemonic that encodes a prior aezeed
         * cipher seed obtained by the user. This may have been generated by the
         * GenSeed method, or be an existing seed.
         */
        public cipherSeedMnemonic: string[];

        /**
         * aezeed_passphrase is an optional user provided passphrase that will be used
         * to encrypt the generated aezeed cipher seed.
         */
        public aezeedPassphrase: Uint8Array;

        /**
         * recovery_window is an optional argument specifying the address lookahead
         * when restoring a wallet seed. The recovery window applies to each
         * invdividual branch of the BIP44 derivation paths. Supplying a recovery
         * window of zero indicates that no addresses should be recovered, such after
         * the first initialization of the wallet.
         */
        public recoveryWindow: number;

        /**
         * Creates a new InitWalletRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitWalletRequest instance
         */
        public static create(properties?: lnrpc.IInitWalletRequest): lnrpc.InitWalletRequest;

        /**
         * Encodes the specified InitWalletRequest message. Does not implicitly {@link lnrpc.InitWalletRequest.verify|verify} messages.
         * @param message InitWalletRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IInitWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitWalletRequest message, length delimited. Does not implicitly {@link lnrpc.InitWalletRequest.verify|verify} messages.
         * @param message InitWalletRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IInitWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitWalletRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitWalletRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.InitWalletRequest;

        /**
         * Decodes an InitWalletRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitWalletRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.InitWalletRequest;

        /**
         * Verifies an InitWalletRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitWalletRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitWalletRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.InitWalletRequest;

        /**
         * Creates a plain object from an InitWalletRequest message. Also converts values to other types if specified.
         * @param message InitWalletRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.InitWalletRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitWalletRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitWalletResponse. */
    interface IInitWalletResponse {
    }

    /** Represents an InitWalletResponse. */
    class InitWalletResponse implements IInitWalletResponse {

        /**
         * Constructs a new InitWalletResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IInitWalletResponse);

        /**
         * Creates a new InitWalletResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitWalletResponse instance
         */
        public static create(properties?: lnrpc.IInitWalletResponse): lnrpc.InitWalletResponse;

        /**
         * Encodes the specified InitWalletResponse message. Does not implicitly {@link lnrpc.InitWalletResponse.verify|verify} messages.
         * @param message InitWalletResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IInitWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitWalletResponse message, length delimited. Does not implicitly {@link lnrpc.InitWalletResponse.verify|verify} messages.
         * @param message InitWalletResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IInitWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitWalletResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitWalletResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.InitWalletResponse;

        /**
         * Decodes an InitWalletResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitWalletResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.InitWalletResponse;

        /**
         * Verifies an InitWalletResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitWalletResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitWalletResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.InitWalletResponse;

        /**
         * Creates a plain object from an InitWalletResponse message. Also converts values to other types if specified.
         * @param message InitWalletResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.InitWalletResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitWalletResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnlockWalletRequest. */
    interface IUnlockWalletRequest {

        /**
         * wallet_password should be the current valid passphrase for the daemon. This
         * will be required to decrypt on-disk material that the daemon requires to
         * function properly.
         */
        walletPassword?: (Uint8Array|null);

        /**
         * recovery_window is an optional argument specifying the address lookahead
         * when restoring a wallet seed. The recovery window applies to each
         * invdividual branch of the BIP44 derivation paths. Supplying a recovery
         * window of zero indicates that no addresses should be recovered, such after
         * the first initialization of the wallet.
         */
        recoveryWindow?: (number|null);
    }

    /** Represents an UnlockWalletRequest. */
    class UnlockWalletRequest implements IUnlockWalletRequest {

        /**
         * Constructs a new UnlockWalletRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IUnlockWalletRequest);

        /**
         * wallet_password should be the current valid passphrase for the daemon. This
         * will be required to decrypt on-disk material that the daemon requires to
         * function properly.
         */
        public walletPassword: Uint8Array;

        /**
         * recovery_window is an optional argument specifying the address lookahead
         * when restoring a wallet seed. The recovery window applies to each
         * invdividual branch of the BIP44 derivation paths. Supplying a recovery
         * window of zero indicates that no addresses should be recovered, such after
         * the first initialization of the wallet.
         */
        public recoveryWindow: number;

        /**
         * Creates a new UnlockWalletRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnlockWalletRequest instance
         */
        public static create(properties?: lnrpc.IUnlockWalletRequest): lnrpc.UnlockWalletRequest;

        /**
         * Encodes the specified UnlockWalletRequest message. Does not implicitly {@link lnrpc.UnlockWalletRequest.verify|verify} messages.
         * @param message UnlockWalletRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IUnlockWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlockWalletRequest message, length delimited. Does not implicitly {@link lnrpc.UnlockWalletRequest.verify|verify} messages.
         * @param message UnlockWalletRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IUnlockWalletRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockWalletRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlockWalletRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.UnlockWalletRequest;

        /**
         * Decodes an UnlockWalletRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlockWalletRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.UnlockWalletRequest;

        /**
         * Verifies an UnlockWalletRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnlockWalletRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnlockWalletRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.UnlockWalletRequest;

        /**
         * Creates a plain object from an UnlockWalletRequest message. Also converts values to other types if specified.
         * @param message UnlockWalletRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.UnlockWalletRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlockWalletRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UnlockWalletResponse. */
    interface IUnlockWalletResponse {
    }

    /** Represents an UnlockWalletResponse. */
    class UnlockWalletResponse implements IUnlockWalletResponse {

        /**
         * Constructs a new UnlockWalletResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IUnlockWalletResponse);

        /**
         * Creates a new UnlockWalletResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UnlockWalletResponse instance
         */
        public static create(properties?: lnrpc.IUnlockWalletResponse): lnrpc.UnlockWalletResponse;

        /**
         * Encodes the specified UnlockWalletResponse message. Does not implicitly {@link lnrpc.UnlockWalletResponse.verify|verify} messages.
         * @param message UnlockWalletResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IUnlockWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UnlockWalletResponse message, length delimited. Does not implicitly {@link lnrpc.UnlockWalletResponse.verify|verify} messages.
         * @param message UnlockWalletResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IUnlockWalletResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnlockWalletResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UnlockWalletResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.UnlockWalletResponse;

        /**
         * Decodes an UnlockWalletResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UnlockWalletResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.UnlockWalletResponse;

        /**
         * Verifies an UnlockWalletResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UnlockWalletResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UnlockWalletResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.UnlockWalletResponse;

        /**
         * Creates a plain object from an UnlockWalletResponse message. Also converts values to other types if specified.
         * @param message UnlockWalletResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.UnlockWalletResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UnlockWalletResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePasswordRequest. */
    interface IChangePasswordRequest {

        /**
         * current_password should be the current valid passphrase used to unlock the
         * daemon.
         */
        currentPassword?: (Uint8Array|null);

        /**
         * new_password should be the new passphrase that will be needed to unlock the
         * daemon.
         */
        newPassword?: (Uint8Array|null);
    }

    /** Represents a ChangePasswordRequest. */
    class ChangePasswordRequest implements IChangePasswordRequest {

        /**
         * Constructs a new ChangePasswordRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChangePasswordRequest);

        /**
         * current_password should be the current valid passphrase used to unlock the
         * daemon.
         */
        public currentPassword: Uint8Array;

        /**
         * new_password should be the new passphrase that will be needed to unlock the
         * daemon.
         */
        public newPassword: Uint8Array;

        /**
         * Creates a new ChangePasswordRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePasswordRequest instance
         */
        public static create(properties?: lnrpc.IChangePasswordRequest): lnrpc.ChangePasswordRequest;

        /**
         * Encodes the specified ChangePasswordRequest message. Does not implicitly {@link lnrpc.ChangePasswordRequest.verify|verify} messages.
         * @param message ChangePasswordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChangePasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePasswordRequest message, length delimited. Does not implicitly {@link lnrpc.ChangePasswordRequest.verify|verify} messages.
         * @param message ChangePasswordRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChangePasswordRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePasswordRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChangePasswordRequest;

        /**
         * Decodes a ChangePasswordRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePasswordRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChangePasswordRequest;

        /**
         * Verifies a ChangePasswordRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePasswordRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePasswordRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChangePasswordRequest;

        /**
         * Creates a plain object from a ChangePasswordRequest message. Also converts values to other types if specified.
         * @param message ChangePasswordRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChangePasswordRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePasswordRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChangePasswordResponse. */
    interface IChangePasswordResponse {
    }

    /** Represents a ChangePasswordResponse. */
    class ChangePasswordResponse implements IChangePasswordResponse {

        /**
         * Constructs a new ChangePasswordResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChangePasswordResponse);

        /**
         * Creates a new ChangePasswordResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChangePasswordResponse instance
         */
        public static create(properties?: lnrpc.IChangePasswordResponse): lnrpc.ChangePasswordResponse;

        /**
         * Encodes the specified ChangePasswordResponse message. Does not implicitly {@link lnrpc.ChangePasswordResponse.verify|verify} messages.
         * @param message ChangePasswordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChangePasswordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChangePasswordResponse message, length delimited. Does not implicitly {@link lnrpc.ChangePasswordResponse.verify|verify} messages.
         * @param message ChangePasswordResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChangePasswordResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChangePasswordResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChangePasswordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChangePasswordResponse;

        /**
         * Decodes a ChangePasswordResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChangePasswordResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChangePasswordResponse;

        /**
         * Verifies a ChangePasswordResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChangePasswordResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChangePasswordResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChangePasswordResponse;

        /**
         * Creates a plain object from a ChangePasswordResponse message. Also converts values to other types if specified.
         * @param message ChangePasswordResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChangePasswordResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChangePasswordResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a Lightning */
    class Lightning extends $protobuf.rpc.Service {

        /**
         * Constructs a new Lightning service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new Lightning service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): Lightning;

        /**
         * lncli: `walletbalance`
         * WalletBalance returns total unspent outputs(confirmed and unconfirmed), all
         * confirmed unspent outputs and all unconfirmed unspent outputs under control
         * of the wallet.
         * @param request WalletBalanceRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and WalletBalanceResponse
         */
        public walletBalance(request: lnrpc.IWalletBalanceRequest, callback: lnrpc.Lightning.WalletBalanceCallback): void;

        /**
         * lncli: `walletbalance`
         * WalletBalance returns total unspent outputs(confirmed and unconfirmed), all
         * confirmed unspent outputs and all unconfirmed unspent outputs under control
         * of the wallet.
         * @param request WalletBalanceRequest message or plain object
         * @returns Promise
         */
        public walletBalance(request: lnrpc.IWalletBalanceRequest): Promise<lnrpc.WalletBalanceResponse>;

        /**
         * lncli: `channelbalance`
         * ChannelBalance returns the total funds available across all open channels
         * in satoshis.
         * @param request ChannelBalanceRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChannelBalanceResponse
         */
        public channelBalance(request: lnrpc.IChannelBalanceRequest, callback: lnrpc.Lightning.ChannelBalanceCallback): void;

        /**
         * lncli: `channelbalance`
         * ChannelBalance returns the total funds available across all open channels
         * in satoshis.
         * @param request ChannelBalanceRequest message or plain object
         * @returns Promise
         */
        public channelBalance(request: lnrpc.IChannelBalanceRequest): Promise<lnrpc.ChannelBalanceResponse>;

        /**
         * lncli: `listchaintxns`
         * GetTransactions returns a list describing all the known transactions
         * relevant to the wallet.
         * @param request GetTransactionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TransactionDetails
         */
        public getTransactions(request: lnrpc.IGetTransactionsRequest, callback: lnrpc.Lightning.GetTransactionsCallback): void;

        /**
         * lncli: `listchaintxns`
         * GetTransactions returns a list describing all the known transactions
         * relevant to the wallet.
         * @param request GetTransactionsRequest message or plain object
         * @returns Promise
         */
        public getTransactions(request: lnrpc.IGetTransactionsRequest): Promise<lnrpc.TransactionDetails>;

        /**
         * lncli: `sendcoins`
         * SendCoins executes a request to send coins to a particular address. Unlike
         * SendMany, this RPC call only allows creating a single output at a time. If
         * neither target_conf, or sat_per_byte are set, then the internal wallet will
         * consult its fee model to determine a fee for the default confirmation
         * target.
         * @param request SendCoinsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendCoinsResponse
         */
        public sendCoins(request: lnrpc.ISendCoinsRequest, callback: lnrpc.Lightning.SendCoinsCallback): void;

        /**
         * lncli: `sendcoins`
         * SendCoins executes a request to send coins to a particular address. Unlike
         * SendMany, this RPC call only allows creating a single output at a time. If
         * neither target_conf, or sat_per_byte are set, then the internal wallet will
         * consult its fee model to determine a fee for the default confirmation
         * target.
         * @param request SendCoinsRequest message or plain object
         * @returns Promise
         */
        public sendCoins(request: lnrpc.ISendCoinsRequest): Promise<lnrpc.SendCoinsResponse>;

        /**
         * SubscribeTransactions creates a uni-directional stream from the server to
         * the client in which any newly discovered transactions relevant to the
         * wallet are sent over.
         * @param request GetTransactionsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Transaction
         */
        public subscribeTransactions(request: lnrpc.IGetTransactionsRequest, callback: lnrpc.Lightning.SubscribeTransactionsCallback): void;

        /**
         * SubscribeTransactions creates a uni-directional stream from the server to
         * the client in which any newly discovered transactions relevant to the
         * wallet are sent over.
         * @param request GetTransactionsRequest message or plain object
         * @returns Promise
         */
        public subscribeTransactions(request: lnrpc.IGetTransactionsRequest): Promise<lnrpc.Transaction>;

        /**
         * lncli: `sendmany`
         * SendMany handles a request for a transaction that creates multiple specified
         * outputs in parallel. If neither target_conf, or sat_per_byte are set, then
         * the internal wallet will consult its fee model to determine a fee for the
         * default confirmation target.
         * @param request SendManyRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendManyResponse
         */
        public sendMany(request: lnrpc.ISendManyRequest, callback: lnrpc.Lightning.SendManyCallback): void;

        /**
         * lncli: `sendmany`
         * SendMany handles a request for a transaction that creates multiple specified
         * outputs in parallel. If neither target_conf, or sat_per_byte are set, then
         * the internal wallet will consult its fee model to determine a fee for the
         * default confirmation target.
         * @param request SendManyRequest message or plain object
         * @returns Promise
         */
        public sendMany(request: lnrpc.ISendManyRequest): Promise<lnrpc.SendManyResponse>;

        /**
         * lncli: `newaddress`
         * NewAddress creates a new address under control of the local wallet.
         * @param request NewAddressRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NewAddressResponse
         */
        public newAddress(request: lnrpc.INewAddressRequest, callback: lnrpc.Lightning.NewAddressCallback): void;

        /**
         * lncli: `newaddress`
         * NewAddress creates a new address under control of the local wallet.
         * @param request NewAddressRequest message or plain object
         * @returns Promise
         */
        public newAddress(request: lnrpc.INewAddressRequest): Promise<lnrpc.NewAddressResponse>;

        /**
         * NewWitnessAddress creates a new witness address under control of the local wallet.
         * @param request NewWitnessAddressRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NewAddressResponse
         */
        public newWitnessAddress(request: lnrpc.INewWitnessAddressRequest, callback: lnrpc.Lightning.NewWitnessAddressCallback): void;

        /**
         * NewWitnessAddress creates a new witness address under control of the local wallet.
         * @param request NewWitnessAddressRequest message or plain object
         * @returns Promise
         */
        public newWitnessAddress(request: lnrpc.INewWitnessAddressRequest): Promise<lnrpc.NewAddressResponse>;

        /**
         * lncli: `signmessage`
         * SignMessage signs a message with this node's private key. The returned
         * signature string is `zbase32` encoded and pubkey recoverable, meaning that
         * only the message digest and signature are needed for verification.
         * @param request SignMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SignMessageResponse
         */
        public signMessage(request: lnrpc.ISignMessageRequest, callback: lnrpc.Lightning.SignMessageCallback): void;

        /**
         * lncli: `signmessage`
         * SignMessage signs a message with this node's private key. The returned
         * signature string is `zbase32` encoded and pubkey recoverable, meaning that
         * only the message digest and signature are needed for verification.
         * @param request SignMessageRequest message or plain object
         * @returns Promise
         */
        public signMessage(request: lnrpc.ISignMessageRequest): Promise<lnrpc.SignMessageResponse>;

        /**
         * lncli: `verifymessage`
         * VerifyMessage verifies a signature over a msg. The signature must be
         * zbase32 encoded and signed by an active node in the resident node's
         * channel database. In addition to returning the validity of the signature,
         * VerifyMessage also returns the recovered pubkey from the signature.
         * @param request VerifyMessageRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and VerifyMessageResponse
         */
        public verifyMessage(request: lnrpc.IVerifyMessageRequest, callback: lnrpc.Lightning.VerifyMessageCallback): void;

        /**
         * lncli: `verifymessage`
         * VerifyMessage verifies a signature over a msg. The signature must be
         * zbase32 encoded and signed by an active node in the resident node's
         * channel database. In addition to returning the validity of the signature,
         * VerifyMessage also returns the recovered pubkey from the signature.
         * @param request VerifyMessageRequest message or plain object
         * @returns Promise
         */
        public verifyMessage(request: lnrpc.IVerifyMessageRequest): Promise<lnrpc.VerifyMessageResponse>;

        /**
         * lncli: `connect`
         * ConnectPeer attempts to establish a connection to a remote peer. This is at
         * the networking level, and is used for communication between nodes. This is
         * distinct from establishing a channel with a peer.
         * @param request ConnectPeerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ConnectPeerResponse
         */
        public connectPeer(request: lnrpc.IConnectPeerRequest, callback: lnrpc.Lightning.ConnectPeerCallback): void;

        /**
         * lncli: `connect`
         * ConnectPeer attempts to establish a connection to a remote peer. This is at
         * the networking level, and is used for communication between nodes. This is
         * distinct from establishing a channel with a peer.
         * @param request ConnectPeerRequest message or plain object
         * @returns Promise
         */
        public connectPeer(request: lnrpc.IConnectPeerRequest): Promise<lnrpc.ConnectPeerResponse>;

        /**
         * lncli: `disconnect`
         * DisconnectPeer attempts to disconnect one peer from another identified by a
         * given pubKey. In the case that we currently have a pending or active channel
         * with the target peer, then this action will be not be allowed.
         * @param request DisconnectPeerRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DisconnectPeerResponse
         */
        public disconnectPeer(request: lnrpc.IDisconnectPeerRequest, callback: lnrpc.Lightning.DisconnectPeerCallback): void;

        /**
         * lncli: `disconnect`
         * DisconnectPeer attempts to disconnect one peer from another identified by a
         * given pubKey. In the case that we currently have a pending or active channel
         * with the target peer, then this action will be not be allowed.
         * @param request DisconnectPeerRequest message or plain object
         * @returns Promise
         */
        public disconnectPeer(request: lnrpc.IDisconnectPeerRequest): Promise<lnrpc.DisconnectPeerResponse>;

        /**
         * lncli: `listpeers`
         * ListPeers returns a verbose listing of all currently active peers.
         * @param request ListPeersRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListPeersResponse
         */
        public listPeers(request: lnrpc.IListPeersRequest, callback: lnrpc.Lightning.ListPeersCallback): void;

        /**
         * lncli: `listpeers`
         * ListPeers returns a verbose listing of all currently active peers.
         * @param request ListPeersRequest message or plain object
         * @returns Promise
         */
        public listPeers(request: lnrpc.IListPeersRequest): Promise<lnrpc.ListPeersResponse>;

        /**
         * lncli: `getinfo`
         * GetInfo returns general information concerning the lightning node including
         * it's identity pubkey, alias, the chains it is connected to, and information
         * concerning the number of open+pending channels.
         * @param request GetInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and GetInfoResponse
         */
        public getInfo(request: lnrpc.IGetInfoRequest, callback: lnrpc.Lightning.GetInfoCallback): void;

        /**
         * lncli: `getinfo`
         * GetInfo returns general information concerning the lightning node including
         * it's identity pubkey, alias, the chains it is connected to, and information
         * concerning the number of open+pending channels.
         * @param request GetInfoRequest message or plain object
         * @returns Promise
         */
        public getInfo(request: lnrpc.IGetInfoRequest): Promise<lnrpc.GetInfoResponse>;

        /**
         * lncli: `pendingchannels`
         * PendingChannels returns a list of all the channels that are currently
         * considered "pending". A channel is pending if it has finished the funding
         * workflow and is waiting for confirmations for the funding txn, or is in the
         * process of closure, either initiated cooperatively or non-cooperatively.
         * @param request PendingChannelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PendingChannelsResponse
         */
        public pendingChannels(request: lnrpc.IPendingChannelsRequest, callback: lnrpc.Lightning.PendingChannelsCallback): void;

        /**
         * lncli: `pendingchannels`
         * PendingChannels returns a list of all the channels that are currently
         * considered "pending". A channel is pending if it has finished the funding
         * workflow and is waiting for confirmations for the funding txn, or is in the
         * process of closure, either initiated cooperatively or non-cooperatively.
         * @param request PendingChannelsRequest message or plain object
         * @returns Promise
         */
        public pendingChannels(request: lnrpc.IPendingChannelsRequest): Promise<lnrpc.PendingChannelsResponse>;

        /**
         * lncli: `listchannels`
         * ListChannels returns a description of all the open channels that this node
         * is a participant in.
         * @param request ListChannelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListChannelsResponse
         */
        public listChannels(request: lnrpc.IListChannelsRequest, callback: lnrpc.Lightning.ListChannelsCallback): void;

        /**
         * lncli: `listchannels`
         * ListChannels returns a description of all the open channels that this node
         * is a participant in.
         * @param request ListChannelsRequest message or plain object
         * @returns Promise
         */
        public listChannels(request: lnrpc.IListChannelsRequest): Promise<lnrpc.ListChannelsResponse>;

        /**
         * lncli: `closedchannels`
         * ClosedChannels returns a description of all the closed channels that
         * this node was a participant in.
         * @param request ClosedChannelsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ClosedChannelsResponse
         */
        public closedChannels(request: lnrpc.IClosedChannelsRequest, callback: lnrpc.Lightning.ClosedChannelsCallback): void;

        /**
         * lncli: `closedchannels`
         * ClosedChannels returns a description of all the closed channels that
         * this node was a participant in.
         * @param request ClosedChannelsRequest message or plain object
         * @returns Promise
         */
        public closedChannels(request: lnrpc.IClosedChannelsRequest): Promise<lnrpc.ClosedChannelsResponse>;

        /**
         * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This
         * call is meant to be consumed by clients to the REST proxy. As with all
         * other sync calls, all byte slices are intended to be populated as hex
         * encoded strings.
         * @param request OpenChannelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChannelPoint
         */
        public openChannelSync(request: lnrpc.IOpenChannelRequest, callback: lnrpc.Lightning.OpenChannelSyncCallback): void;

        /**
         * OpenChannelSync is a synchronous version of the OpenChannel RPC call. This
         * call is meant to be consumed by clients to the REST proxy. As with all
         * other sync calls, all byte slices are intended to be populated as hex
         * encoded strings.
         * @param request OpenChannelRequest message or plain object
         * @returns Promise
         */
        public openChannelSync(request: lnrpc.IOpenChannelRequest): Promise<lnrpc.ChannelPoint>;

        /**
         * lncli: `openchannel`
         * OpenChannel attempts to open a singly funded channel specified in the
         * request to a remote peer. Users are able to specify a target number of
         * blocks that the funding transaction should be confirmed in, or a manual fee
         * rate to us for the funding transaction. If neither are specified, then a
         * lax block confirmation target is used.
         * @param request OpenChannelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and OpenStatusUpdate
         */
        public openChannel(request: lnrpc.IOpenChannelRequest, callback: lnrpc.Lightning.OpenChannelCallback): void;

        /**
         * lncli: `openchannel`
         * OpenChannel attempts to open a singly funded channel specified in the
         * request to a remote peer. Users are able to specify a target number of
         * blocks that the funding transaction should be confirmed in, or a manual fee
         * rate to us for the funding transaction. If neither are specified, then a
         * lax block confirmation target is used.
         * @param request OpenChannelRequest message or plain object
         * @returns Promise
         */
        public openChannel(request: lnrpc.IOpenChannelRequest): Promise<lnrpc.OpenStatusUpdate>;

        /**
         * lncli: `closechannel`
         * CloseChannel attempts to close an active channel identified by its channel
         * outpoint (ChannelPoint). The actions of this method can additionally be
         * augmented to attempt a force close after a timeout period in the case of an
         * inactive peer. If a non-force close (cooperative closure) is requested,
         * then the user can specify either a target number of blocks until the
         * closure transaction is confirmed, or a manual fee rate. If neither are
         * specified, then a default lax, block confirmation target is used.
         * @param request CloseChannelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and CloseStatusUpdate
         */
        public closeChannel(request: lnrpc.ICloseChannelRequest, callback: lnrpc.Lightning.CloseChannelCallback): void;

        /**
         * lncli: `closechannel`
         * CloseChannel attempts to close an active channel identified by its channel
         * outpoint (ChannelPoint). The actions of this method can additionally be
         * augmented to attempt a force close after a timeout period in the case of an
         * inactive peer. If a non-force close (cooperative closure) is requested,
         * then the user can specify either a target number of blocks until the
         * closure transaction is confirmed, or a manual fee rate. If neither are
         * specified, then a default lax, block confirmation target is used.
         * @param request CloseChannelRequest message or plain object
         * @returns Promise
         */
        public closeChannel(request: lnrpc.ICloseChannelRequest): Promise<lnrpc.CloseStatusUpdate>;

        /**
         * lncli: `sendpayment`
         * SendPayment dispatches a bi-directional streaming RPC for sending payments
         * through the Lightning Network. A single RPC invocation creates a persistent
         * bi-directional stream allowing clients to rapidly send payments through the
         * Lightning Network with a single persistent connection.
         * @param request SendRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendResponse
         */
        public sendPayment(request: lnrpc.ISendRequest, callback: lnrpc.Lightning.SendPaymentCallback): void;

        /**
         * lncli: `sendpayment`
         * SendPayment dispatches a bi-directional streaming RPC for sending payments
         * through the Lightning Network. A single RPC invocation creates a persistent
         * bi-directional stream allowing clients to rapidly send payments through the
         * Lightning Network with a single persistent connection.
         * @param request SendRequest message or plain object
         * @returns Promise
         */
        public sendPayment(request: lnrpc.ISendRequest): Promise<lnrpc.SendResponse>;

        /**
         * SendPaymentSync is the synchronous non-streaming version of SendPayment.
         * This RPC is intended to be consumed by clients of the REST proxy.
         * Additionally, this RPC expects the destination's public key and the payment
         * hash (if any) to be encoded as hex strings.
         * @param request SendRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendResponse
         */
        public sendPaymentSync(request: lnrpc.ISendRequest, callback: lnrpc.Lightning.SendPaymentSyncCallback): void;

        /**
         * SendPaymentSync is the synchronous non-streaming version of SendPayment.
         * This RPC is intended to be consumed by clients of the REST proxy.
         * Additionally, this RPC expects the destination's public key and the payment
         * hash (if any) to be encoded as hex strings.
         * @param request SendRequest message or plain object
         * @returns Promise
         */
        public sendPaymentSync(request: lnrpc.ISendRequest): Promise<lnrpc.SendResponse>;

        /**
         * lncli: `sendtoroute`
         * SendToRoute is a bi-directional streaming RPC for sending payment through
         * the Lightning Network. This method differs from SendPayment in that it
         * allows users to specify a full route manually. This can be used for things
         * like rebalancing, and atomic swaps.
         * @param request SendToRouteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendResponse
         */
        public sendToRoute(request: lnrpc.ISendToRouteRequest, callback: lnrpc.Lightning.SendToRouteCallback): void;

        /**
         * lncli: `sendtoroute`
         * SendToRoute is a bi-directional streaming RPC for sending payment through
         * the Lightning Network. This method differs from SendPayment in that it
         * allows users to specify a full route manually. This can be used for things
         * like rebalancing, and atomic swaps.
         * @param request SendToRouteRequest message or plain object
         * @returns Promise
         */
        public sendToRoute(request: lnrpc.ISendToRouteRequest): Promise<lnrpc.SendResponse>;

        /**
         * SendToRouteSync is a synchronous version of SendToRoute. It Will block
         * until the payment either fails or succeeds.
         * @param request SendToRouteRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and SendResponse
         */
        public sendToRouteSync(request: lnrpc.ISendToRouteRequest, callback: lnrpc.Lightning.SendToRouteSyncCallback): void;

        /**
         * SendToRouteSync is a synchronous version of SendToRoute. It Will block
         * until the payment either fails or succeeds.
         * @param request SendToRouteRequest message or plain object
         * @returns Promise
         */
        public sendToRouteSync(request: lnrpc.ISendToRouteRequest): Promise<lnrpc.SendResponse>;

        /**
         * lncli: `addinvoice`
         * AddInvoice attempts to add a new invoice to the invoice database. Any
         * duplicated invoices are rejected, therefore all invoices *must* have a
         * unique payment preimage.
         * @param request Invoice message or plain object
         * @param callback Node-style callback called with the error, if any, and AddInvoiceResponse
         */
        public addInvoice(request: lnrpc.IInvoice, callback: lnrpc.Lightning.AddInvoiceCallback): void;

        /**
         * lncli: `addinvoice`
         * AddInvoice attempts to add a new invoice to the invoice database. Any
         * duplicated invoices are rejected, therefore all invoices *must* have a
         * unique payment preimage.
         * @param request Invoice message or plain object
         * @returns Promise
         */
        public addInvoice(request: lnrpc.IInvoice): Promise<lnrpc.AddInvoiceResponse>;

        /**
         * lncli: `listinvoices`
         * ListInvoices returns a list of all the invoices currently stored within the
         * database. Any active debug invoices are ignored.
         * @param request ListInvoiceRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListInvoiceResponse
         */
        public listInvoices(request: lnrpc.IListInvoiceRequest, callback: lnrpc.Lightning.ListInvoicesCallback): void;

        /**
         * lncli: `listinvoices`
         * ListInvoices returns a list of all the invoices currently stored within the
         * database. Any active debug invoices are ignored.
         * @param request ListInvoiceRequest message or plain object
         * @returns Promise
         */
        public listInvoices(request: lnrpc.IListInvoiceRequest): Promise<lnrpc.ListInvoiceResponse>;

        /**
         * lncli: `lookupinvoice`
         * LookupInvoice attempts to look up an invoice according to its payment hash.
         * The passed payment hash *must* be exactly 32 bytes, if not, an error is
         * returned.
         * @param request PaymentHash message or plain object
         * @param callback Node-style callback called with the error, if any, and Invoice
         */
        public lookupInvoice(request: lnrpc.IPaymentHash, callback: lnrpc.Lightning.LookupInvoiceCallback): void;

        /**
         * lncli: `lookupinvoice`
         * LookupInvoice attempts to look up an invoice according to its payment hash.
         * The passed payment hash *must* be exactly 32 bytes, if not, an error is
         * returned.
         * @param request PaymentHash message or plain object
         * @returns Promise
         */
        public lookupInvoice(request: lnrpc.IPaymentHash): Promise<lnrpc.Invoice>;

        /**
         * SubscribeInvoices returns a uni-directional stream (sever -> client) for
         * notifying the client of newly added/settled invoices. The caller can
         * optionally specify the add_index and/or the settle_index. If the add_index
         * is specified, then we'll first start by sending add invoice events for all
         * invoices with an add_index greater than the specified value.  If the
         * settle_index is specified, the next, we'll send out all settle events for
         * invoices with a settle_index greater than the specified value.  One or both
         * of these fields can be set. If no fields are set, then we'll only send out
         * the latest add/settle events.
         * @param request InvoiceSubscription message or plain object
         * @param callback Node-style callback called with the error, if any, and Invoice
         */
        public subscribeInvoices(request: lnrpc.IInvoiceSubscription, callback: lnrpc.Lightning.SubscribeInvoicesCallback): void;

        /**
         * SubscribeInvoices returns a uni-directional stream (sever -> client) for
         * notifying the client of newly added/settled invoices. The caller can
         * optionally specify the add_index and/or the settle_index. If the add_index
         * is specified, then we'll first start by sending add invoice events for all
         * invoices with an add_index greater than the specified value.  If the
         * settle_index is specified, the next, we'll send out all settle events for
         * invoices with a settle_index greater than the specified value.  One or both
         * of these fields can be set. If no fields are set, then we'll only send out
         * the latest add/settle events.
         * @param request InvoiceSubscription message or plain object
         * @returns Promise
         */
        public subscribeInvoices(request: lnrpc.IInvoiceSubscription): Promise<lnrpc.Invoice>;

        /**
         * lncli: `decodepayreq`
         * DecodePayReq takes an encoded payment request string and attempts to decode
         * it, returning a full description of the conditions encoded within the
         * payment request.
         * @param request PayReqString message or plain object
         * @param callback Node-style callback called with the error, if any, and PayReq
         */
        public decodePayReq(request: lnrpc.IPayReqString, callback: lnrpc.Lightning.DecodePayReqCallback): void;

        /**
         * lncli: `decodepayreq`
         * DecodePayReq takes an encoded payment request string and attempts to decode
         * it, returning a full description of the conditions encoded within the
         * payment request.
         * @param request PayReqString message or plain object
         * @returns Promise
         */
        public decodePayReq(request: lnrpc.IPayReqString): Promise<lnrpc.PayReq>;

        /**
         * lncli: `listpayments`
         * ListPayments returns a list of all outgoing payments.
         * @param request ListPaymentsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ListPaymentsResponse
         */
        public listPayments(request: lnrpc.IListPaymentsRequest, callback: lnrpc.Lightning.ListPaymentsCallback): void;

        /**
         * lncli: `listpayments`
         * ListPayments returns a list of all outgoing payments.
         * @param request ListPaymentsRequest message or plain object
         * @returns Promise
         */
        public listPayments(request: lnrpc.IListPaymentsRequest): Promise<lnrpc.ListPaymentsResponse>;

        /**
         * DeleteAllPayments deletes all outgoing payments from DB.
         * @param request DeleteAllPaymentsRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DeleteAllPaymentsResponse
         */
        public deleteAllPayments(request: lnrpc.IDeleteAllPaymentsRequest, callback: lnrpc.Lightning.DeleteAllPaymentsCallback): void;

        /**
         * DeleteAllPayments deletes all outgoing payments from DB.
         * @param request DeleteAllPaymentsRequest message or plain object
         * @returns Promise
         */
        public deleteAllPayments(request: lnrpc.IDeleteAllPaymentsRequest): Promise<lnrpc.DeleteAllPaymentsResponse>;

        /**
         * lncli: `describegraph`
         * DescribeGraph returns a description of the latest graph state from the
         * point of view of the node. The graph information is partitioned into two
         * components: all the nodes/vertexes, and all the edges that connect the
         * vertexes themselves.  As this is a directed graph, the edges also contain
         * the node directional specific routing policy which includes: the time lock
         * delta, fee information, etc.
         * @param request ChannelGraphRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChannelGraph
         */
        public describeGraph(request: lnrpc.IChannelGraphRequest, callback: lnrpc.Lightning.DescribeGraphCallback): void;

        /**
         * lncli: `describegraph`
         * DescribeGraph returns a description of the latest graph state from the
         * point of view of the node. The graph information is partitioned into two
         * components: all the nodes/vertexes, and all the edges that connect the
         * vertexes themselves.  As this is a directed graph, the edges also contain
         * the node directional specific routing policy which includes: the time lock
         * delta, fee information, etc.
         * @param request ChannelGraphRequest message or plain object
         * @returns Promise
         */
        public describeGraph(request: lnrpc.IChannelGraphRequest): Promise<lnrpc.ChannelGraph>;

        /**
         * lncli: `getchaninfo`
         * GetChanInfo returns the latest authenticated network announcement for the
         * given channel identified by its channel ID: an 8-byte integer which
         * uniquely identifies the location of transaction's funding output within the
         * blockchain.
         * @param request ChanInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ChannelEdge
         */
        public getChanInfo(request: lnrpc.IChanInfoRequest, callback: lnrpc.Lightning.GetChanInfoCallback): void;

        /**
         * lncli: `getchaninfo`
         * GetChanInfo returns the latest authenticated network announcement for the
         * given channel identified by its channel ID: an 8-byte integer which
         * uniquely identifies the location of transaction's funding output within the
         * blockchain.
         * @param request ChanInfoRequest message or plain object
         * @returns Promise
         */
        public getChanInfo(request: lnrpc.IChanInfoRequest): Promise<lnrpc.ChannelEdge>;

        /**
         * lncli: `getnodeinfo`
         * GetNodeInfo returns the latest advertised, aggregated, and authenticated
         * channel information for the specified node identified by its public key.
         * @param request NodeInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NodeInfo
         */
        public getNodeInfo(request: lnrpc.INodeInfoRequest, callback: lnrpc.Lightning.GetNodeInfoCallback): void;

        /**
         * lncli: `getnodeinfo`
         * GetNodeInfo returns the latest advertised, aggregated, and authenticated
         * channel information for the specified node identified by its public key.
         * @param request NodeInfoRequest message or plain object
         * @returns Promise
         */
        public getNodeInfo(request: lnrpc.INodeInfoRequest): Promise<lnrpc.NodeInfo>;

        /**
         * lncli: `queryroutes`
         * QueryRoutes attempts to query the daemon's Channel Router for a possible
         * route to a target destination capable of carrying a specific amount of
         * satoshis. The retuned route contains the full details required to craft and
         * send an HTLC, also including the necessary information that should be
         * present within the Sphinx packet encapsulated within the HTLC.
         * @param request QueryRoutesRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and QueryRoutesResponse
         */
        public queryRoutes(request: lnrpc.IQueryRoutesRequest, callback: lnrpc.Lightning.QueryRoutesCallback): void;

        /**
         * lncli: `queryroutes`
         * QueryRoutes attempts to query the daemon's Channel Router for a possible
         * route to a target destination capable of carrying a specific amount of
         * satoshis. The retuned route contains the full details required to craft and
         * send an HTLC, also including the necessary information that should be
         * present within the Sphinx packet encapsulated within the HTLC.
         * @param request QueryRoutesRequest message or plain object
         * @returns Promise
         */
        public queryRoutes(request: lnrpc.IQueryRoutesRequest): Promise<lnrpc.QueryRoutesResponse>;

        /**
         * lncli: `getnetworkinfo`
         * GetNetworkInfo returns some basic stats about the known channel graph from
         * the point of view of the node.
         * @param request NetworkInfoRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and NetworkInfo
         */
        public getNetworkInfo(request: lnrpc.INetworkInfoRequest, callback: lnrpc.Lightning.GetNetworkInfoCallback): void;

        /**
         * lncli: `getnetworkinfo`
         * GetNetworkInfo returns some basic stats about the known channel graph from
         * the point of view of the node.
         * @param request NetworkInfoRequest message or plain object
         * @returns Promise
         */
        public getNetworkInfo(request: lnrpc.INetworkInfoRequest): Promise<lnrpc.NetworkInfo>;

        /**
         * lncli: `stop`
         * StopDaemon will send a shutdown request to the interrupt handler, triggering
         * a graceful shutdown of the daemon.
         * @param request StopRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and StopResponse
         */
        public stopDaemon(request: lnrpc.IStopRequest, callback: lnrpc.Lightning.StopDaemonCallback): void;

        /**
         * lncli: `stop`
         * StopDaemon will send a shutdown request to the interrupt handler, triggering
         * a graceful shutdown of the daemon.
         * @param request StopRequest message or plain object
         * @returns Promise
         */
        public stopDaemon(request: lnrpc.IStopRequest): Promise<lnrpc.StopResponse>;

        /**
         * SubscribeChannelGraph launches a streaming RPC that allows the caller to
         * receive notifications upon any changes to the channel graph topology from
         * the point of view of the responding node. Events notified include: new
         * nodes coming online, nodes updating their authenticated attributes, new
         * channels being advertised, updates in the routing policy for a directional
         * channel edge, and when channels are closed on-chain.
         * @param request GraphTopologySubscription message or plain object
         * @param callback Node-style callback called with the error, if any, and GraphTopologyUpdate
         */
        public subscribeChannelGraph(request: lnrpc.IGraphTopologySubscription, callback: lnrpc.Lightning.SubscribeChannelGraphCallback): void;

        /**
         * SubscribeChannelGraph launches a streaming RPC that allows the caller to
         * receive notifications upon any changes to the channel graph topology from
         * the point of view of the responding node. Events notified include: new
         * nodes coming online, nodes updating their authenticated attributes, new
         * channels being advertised, updates in the routing policy for a directional
         * channel edge, and when channels are closed on-chain.
         * @param request GraphTopologySubscription message or plain object
         * @returns Promise
         */
        public subscribeChannelGraph(request: lnrpc.IGraphTopologySubscription): Promise<lnrpc.GraphTopologyUpdate>;

        /**
         * lncli: `debuglevel`
         * DebugLevel allows a caller to programmatically set the logging verbosity of
         * lnd. The logging can be targeted according to a coarse daemon-wide logging
         * level, or in a granular fashion to specify the logging for a target
         * sub-system.
         * @param request DebugLevelRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and DebugLevelResponse
         */
        public debugLevel(request: lnrpc.IDebugLevelRequest, callback: lnrpc.Lightning.DebugLevelCallback): void;

        /**
         * lncli: `debuglevel`
         * DebugLevel allows a caller to programmatically set the logging verbosity of
         * lnd. The logging can be targeted according to a coarse daemon-wide logging
         * level, or in a granular fashion to specify the logging for a target
         * sub-system.
         * @param request DebugLevelRequest message or plain object
         * @returns Promise
         */
        public debugLevel(request: lnrpc.IDebugLevelRequest): Promise<lnrpc.DebugLevelResponse>;

        /**
         * lncli: `feereport`
         * FeeReport allows the caller to obtain a report detailing the current fee
         * schedule enforced by the node globally for each channel.
         * @param request FeeReportRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and FeeReportResponse
         */
        public feeReport(request: lnrpc.IFeeReportRequest, callback: lnrpc.Lightning.FeeReportCallback): void;

        /**
         * lncli: `feereport`
         * FeeReport allows the caller to obtain a report detailing the current fee
         * schedule enforced by the node globally for each channel.
         * @param request FeeReportRequest message or plain object
         * @returns Promise
         */
        public feeReport(request: lnrpc.IFeeReportRequest): Promise<lnrpc.FeeReportResponse>;

        /**
         * lncli: `updatechanpolicy`
         * UpdateChannelPolicy allows the caller to update the fee schedule and
         * channel policies for all channels globally, or a particular channel.
         * @param request PolicyUpdateRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and PolicyUpdateResponse
         */
        public updateChannelPolicy(request: lnrpc.IPolicyUpdateRequest, callback: lnrpc.Lightning.UpdateChannelPolicyCallback): void;

        /**
         * lncli: `updatechanpolicy`
         * UpdateChannelPolicy allows the caller to update the fee schedule and
         * channel policies for all channels globally, or a particular channel.
         * @param request PolicyUpdateRequest message or plain object
         * @returns Promise
         */
        public updateChannelPolicy(request: lnrpc.IPolicyUpdateRequest): Promise<lnrpc.PolicyUpdateResponse>;

        /**
         * lncli: `fwdinghistory`
         * ForwardingHistory allows the caller to query the htlcswitch for a record of
         * all HTLC's forwarded within the target time range, and integer offset
         * within that time range. If no time-range is specified, then the first chunk
         * of the past 24 hrs of forwarding history are returned.
         *
         * A list of forwarding events are returned. The size of each forwarding event
         * is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB.
         * As a result each message can only contain 50k entries.  Each response has
         * the index offset of the last entry. The index offset can be provided to the
         * request to allow the caller to skip a series of records.
         * @param request ForwardingHistoryRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and ForwardingHistoryResponse
         */
        public forwardingHistory(request: lnrpc.IForwardingHistoryRequest, callback: lnrpc.Lightning.ForwardingHistoryCallback): void;

        /**
         * lncli: `fwdinghistory`
         * ForwardingHistory allows the caller to query the htlcswitch for a record of
         * all HTLC's forwarded within the target time range, and integer offset
         * within that time range. If no time-range is specified, then the first chunk
         * of the past 24 hrs of forwarding history are returned.
         *
         * A list of forwarding events are returned. The size of each forwarding event
         * is 40 bytes, and the max message size able to be returned in gRPC is 4 MiB.
         * As a result each message can only contain 50k entries.  Each response has
         * the index offset of the last entry. The index offset can be provided to the
         * request to allow the caller to skip a series of records.
         * @param request ForwardingHistoryRequest message or plain object
         * @returns Promise
         */
        public forwardingHistory(request: lnrpc.IForwardingHistoryRequest): Promise<lnrpc.ForwardingHistoryResponse>;
    }

    namespace Lightning {

        /**
         * Callback as used by {@link lnrpc.Lightning#walletBalance}.
         * @param error Error, if any
         * @param [response] WalletBalanceResponse
         */
        type WalletBalanceCallback = (error: (Error|null), response?: lnrpc.WalletBalanceResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#channelBalance}.
         * @param error Error, if any
         * @param [response] ChannelBalanceResponse
         */
        type ChannelBalanceCallback = (error: (Error|null), response?: lnrpc.ChannelBalanceResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#getTransactions}.
         * @param error Error, if any
         * @param [response] TransactionDetails
         */
        type GetTransactionsCallback = (error: (Error|null), response?: lnrpc.TransactionDetails) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendCoins}.
         * @param error Error, if any
         * @param [response] SendCoinsResponse
         */
        type SendCoinsCallback = (error: (Error|null), response?: lnrpc.SendCoinsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#subscribeTransactions}.
         * @param error Error, if any
         * @param [response] Transaction
         */
        type SubscribeTransactionsCallback = (error: (Error|null), response?: lnrpc.Transaction) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendMany}.
         * @param error Error, if any
         * @param [response] SendManyResponse
         */
        type SendManyCallback = (error: (Error|null), response?: lnrpc.SendManyResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#newAddress}.
         * @param error Error, if any
         * @param [response] NewAddressResponse
         */
        type NewAddressCallback = (error: (Error|null), response?: lnrpc.NewAddressResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#newWitnessAddress}.
         * @param error Error, if any
         * @param [response] NewAddressResponse
         */
        type NewWitnessAddressCallback = (error: (Error|null), response?: lnrpc.NewAddressResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#signMessage}.
         * @param error Error, if any
         * @param [response] SignMessageResponse
         */
        type SignMessageCallback = (error: (Error|null), response?: lnrpc.SignMessageResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#verifyMessage}.
         * @param error Error, if any
         * @param [response] VerifyMessageResponse
         */
        type VerifyMessageCallback = (error: (Error|null), response?: lnrpc.VerifyMessageResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#connectPeer}.
         * @param error Error, if any
         * @param [response] ConnectPeerResponse
         */
        type ConnectPeerCallback = (error: (Error|null), response?: lnrpc.ConnectPeerResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#disconnectPeer}.
         * @param error Error, if any
         * @param [response] DisconnectPeerResponse
         */
        type DisconnectPeerCallback = (error: (Error|null), response?: lnrpc.DisconnectPeerResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#listPeers}.
         * @param error Error, if any
         * @param [response] ListPeersResponse
         */
        type ListPeersCallback = (error: (Error|null), response?: lnrpc.ListPeersResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#getInfo}.
         * @param error Error, if any
         * @param [response] GetInfoResponse
         */
        type GetInfoCallback = (error: (Error|null), response?: lnrpc.GetInfoResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#pendingChannels}.
         * @param error Error, if any
         * @param [response] PendingChannelsResponse
         */
        type PendingChannelsCallback = (error: (Error|null), response?: lnrpc.PendingChannelsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#listChannels}.
         * @param error Error, if any
         * @param [response] ListChannelsResponse
         */
        type ListChannelsCallback = (error: (Error|null), response?: lnrpc.ListChannelsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#closedChannels}.
         * @param error Error, if any
         * @param [response] ClosedChannelsResponse
         */
        type ClosedChannelsCallback = (error: (Error|null), response?: lnrpc.ClosedChannelsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#openChannelSync}.
         * @param error Error, if any
         * @param [response] ChannelPoint
         */
        type OpenChannelSyncCallback = (error: (Error|null), response?: lnrpc.ChannelPoint) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#openChannel}.
         * @param error Error, if any
         * @param [response] OpenStatusUpdate
         */
        type OpenChannelCallback = (error: (Error|null), response?: lnrpc.OpenStatusUpdate) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#closeChannel}.
         * @param error Error, if any
         * @param [response] CloseStatusUpdate
         */
        type CloseChannelCallback = (error: (Error|null), response?: lnrpc.CloseStatusUpdate) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendPayment}.
         * @param error Error, if any
         * @param [response] SendResponse
         */
        type SendPaymentCallback = (error: (Error|null), response?: lnrpc.SendResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendPaymentSync}.
         * @param error Error, if any
         * @param [response] SendResponse
         */
        type SendPaymentSyncCallback = (error: (Error|null), response?: lnrpc.SendResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendToRoute}.
         * @param error Error, if any
         * @param [response] SendResponse
         */
        type SendToRouteCallback = (error: (Error|null), response?: lnrpc.SendResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#sendToRouteSync}.
         * @param error Error, if any
         * @param [response] SendResponse
         */
        type SendToRouteSyncCallback = (error: (Error|null), response?: lnrpc.SendResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#addInvoice}.
         * @param error Error, if any
         * @param [response] AddInvoiceResponse
         */
        type AddInvoiceCallback = (error: (Error|null), response?: lnrpc.AddInvoiceResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#listInvoices}.
         * @param error Error, if any
         * @param [response] ListInvoiceResponse
         */
        type ListInvoicesCallback = (error: (Error|null), response?: lnrpc.ListInvoiceResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#lookupInvoice}.
         * @param error Error, if any
         * @param [response] Invoice
         */
        type LookupInvoiceCallback = (error: (Error|null), response?: lnrpc.Invoice) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#subscribeInvoices}.
         * @param error Error, if any
         * @param [response] Invoice
         */
        type SubscribeInvoicesCallback = (error: (Error|null), response?: lnrpc.Invoice) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#decodePayReq}.
         * @param error Error, if any
         * @param [response] PayReq
         */
        type DecodePayReqCallback = (error: (Error|null), response?: lnrpc.PayReq) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#listPayments}.
         * @param error Error, if any
         * @param [response] ListPaymentsResponse
         */
        type ListPaymentsCallback = (error: (Error|null), response?: lnrpc.ListPaymentsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#deleteAllPayments}.
         * @param error Error, if any
         * @param [response] DeleteAllPaymentsResponse
         */
        type DeleteAllPaymentsCallback = (error: (Error|null), response?: lnrpc.DeleteAllPaymentsResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#describeGraph}.
         * @param error Error, if any
         * @param [response] ChannelGraph
         */
        type DescribeGraphCallback = (error: (Error|null), response?: lnrpc.ChannelGraph) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#getChanInfo}.
         * @param error Error, if any
         * @param [response] ChannelEdge
         */
        type GetChanInfoCallback = (error: (Error|null), response?: lnrpc.ChannelEdge) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#getNodeInfo}.
         * @param error Error, if any
         * @param [response] NodeInfo
         */
        type GetNodeInfoCallback = (error: (Error|null), response?: lnrpc.NodeInfo) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#queryRoutes}.
         * @param error Error, if any
         * @param [response] QueryRoutesResponse
         */
        type QueryRoutesCallback = (error: (Error|null), response?: lnrpc.QueryRoutesResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#getNetworkInfo}.
         * @param error Error, if any
         * @param [response] NetworkInfo
         */
        type GetNetworkInfoCallback = (error: (Error|null), response?: lnrpc.NetworkInfo) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#stopDaemon}.
         * @param error Error, if any
         * @param [response] StopResponse
         */
        type StopDaemonCallback = (error: (Error|null), response?: lnrpc.StopResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#subscribeChannelGraph}.
         * @param error Error, if any
         * @param [response] GraphTopologyUpdate
         */
        type SubscribeChannelGraphCallback = (error: (Error|null), response?: lnrpc.GraphTopologyUpdate) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#debugLevel}.
         * @param error Error, if any
         * @param [response] DebugLevelResponse
         */
        type DebugLevelCallback = (error: (Error|null), response?: lnrpc.DebugLevelResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#feeReport}.
         * @param error Error, if any
         * @param [response] FeeReportResponse
         */
        type FeeReportCallback = (error: (Error|null), response?: lnrpc.FeeReportResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#updateChannelPolicy}.
         * @param error Error, if any
         * @param [response] PolicyUpdateResponse
         */
        type UpdateChannelPolicyCallback = (error: (Error|null), response?: lnrpc.PolicyUpdateResponse) => void;

        /**
         * Callback as used by {@link lnrpc.Lightning#forwardingHistory}.
         * @param error Error, if any
         * @param [response] ForwardingHistoryResponse
         */
        type ForwardingHistoryCallback = (error: (Error|null), response?: lnrpc.ForwardingHistoryResponse) => void;
    }

    /** Properties of a Transaction. */
    interface ITransaction {

        /** The transaction hash */
        txHash?: (string|null);

        /** The transaction ammount, denominated in satoshis */
        amount?: (number|Long|null);

        /** The number of confirmations */
        numConfirmations?: (number|null);

        /** The hash of the block this transaction was included in */
        blockHash?: (string|null);

        /** The height of the block this transaction was included in */
        blockHeight?: (number|null);

        /** Timestamp of this transaction */
        timeStamp?: (number|Long|null);

        /** Fees paid for this transaction */
        totalFees?: (number|Long|null);

        /** Addresses that received funds for this transaction */
        destAddresses?: (string[]|null);
    }

    /** Represents a Transaction. */
    class Transaction implements ITransaction {

        /**
         * Constructs a new Transaction.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ITransaction);

        /** The transaction hash */
        public txHash: string;

        /** The transaction ammount, denominated in satoshis */
        public amount: (number|Long);

        /** The number of confirmations */
        public numConfirmations: number;

        /** The hash of the block this transaction was included in */
        public blockHash: string;

        /** The height of the block this transaction was included in */
        public blockHeight: number;

        /** Timestamp of this transaction */
        public timeStamp: (number|Long);

        /** Fees paid for this transaction */
        public totalFees: (number|Long);

        /** Addresses that received funds for this transaction */
        public destAddresses: string[];

        /**
         * Creates a new Transaction instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transaction instance
         */
        public static create(properties?: lnrpc.ITransaction): lnrpc.Transaction;

        /**
         * Encodes the specified Transaction message. Does not implicitly {@link lnrpc.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transaction message, length delimited. Does not implicitly {@link lnrpc.Transaction.verify|verify} messages.
         * @param message Transaction message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ITransaction, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transaction message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Transaction;

        /**
         * Decodes a Transaction message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transaction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Transaction;

        /**
         * Verifies a Transaction message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transaction message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transaction
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Transaction;

        /**
         * Creates a plain object from a Transaction message. Also converts values to other types if specified.
         * @param message Transaction
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Transaction, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transaction to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetTransactionsRequest. */
    interface IGetTransactionsRequest {
    }

    /** Represents a GetTransactionsRequest. */
    class GetTransactionsRequest implements IGetTransactionsRequest {

        /**
         * Constructs a new GetTransactionsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGetTransactionsRequest);

        /**
         * Creates a new GetTransactionsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetTransactionsRequest instance
         */
        public static create(properties?: lnrpc.IGetTransactionsRequest): lnrpc.GetTransactionsRequest;

        /**
         * Encodes the specified GetTransactionsRequest message. Does not implicitly {@link lnrpc.GetTransactionsRequest.verify|verify} messages.
         * @param message GetTransactionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGetTransactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetTransactionsRequest message, length delimited. Does not implicitly {@link lnrpc.GetTransactionsRequest.verify|verify} messages.
         * @param message GetTransactionsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGetTransactionsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GetTransactionsRequest;

        /**
         * Decodes a GetTransactionsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetTransactionsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GetTransactionsRequest;

        /**
         * Verifies a GetTransactionsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetTransactionsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetTransactionsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GetTransactionsRequest;

        /**
         * Creates a plain object from a GetTransactionsRequest message. Also converts values to other types if specified.
         * @param message GetTransactionsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GetTransactionsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetTransactionsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TransactionDetails. */
    interface ITransactionDetails {

        /** The list of transactions relevant to the wallet. */
        transactions?: (lnrpc.ITransaction[]|null);
    }

    /** Represents a TransactionDetails. */
    class TransactionDetails implements ITransactionDetails {

        /**
         * Constructs a new TransactionDetails.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ITransactionDetails);

        /** The list of transactions relevant to the wallet. */
        public transactions: lnrpc.ITransaction[];

        /**
         * Creates a new TransactionDetails instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TransactionDetails instance
         */
        public static create(properties?: lnrpc.ITransactionDetails): lnrpc.TransactionDetails;

        /**
         * Encodes the specified TransactionDetails message. Does not implicitly {@link lnrpc.TransactionDetails.verify|verify} messages.
         * @param message TransactionDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ITransactionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TransactionDetails message, length delimited. Does not implicitly {@link lnrpc.TransactionDetails.verify|verify} messages.
         * @param message TransactionDetails message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ITransactionDetails, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TransactionDetails message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TransactionDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.TransactionDetails;

        /**
         * Decodes a TransactionDetails message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TransactionDetails
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.TransactionDetails;

        /**
         * Verifies a TransactionDetails message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TransactionDetails message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TransactionDetails
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.TransactionDetails;

        /**
         * Creates a plain object from a TransactionDetails message. Also converts values to other types if specified.
         * @param message TransactionDetails
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.TransactionDetails, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TransactionDetails to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeeLimit. */
    interface IFeeLimit {

        /** The fee limit expressed as a fixed amount of satoshis. */
        fixed?: (number|Long|null);

        /** The fee limit expressed as a percentage of the payment amount. */
        percent?: (number|Long|null);
    }

    /** Represents a FeeLimit. */
    class FeeLimit implements IFeeLimit {

        /**
         * Constructs a new FeeLimit.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IFeeLimit);

        /** The fee limit expressed as a fixed amount of satoshis. */
        public fixed: (number|Long);

        /** The fee limit expressed as a percentage of the payment amount. */
        public percent: (number|Long);

        /** FeeLimit limit. */
        public limit?: ("fixed"|"percent");

        /**
         * Creates a new FeeLimit instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeLimit instance
         */
        public static create(properties?: lnrpc.IFeeLimit): lnrpc.FeeLimit;

        /**
         * Encodes the specified FeeLimit message. Does not implicitly {@link lnrpc.FeeLimit.verify|verify} messages.
         * @param message FeeLimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IFeeLimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeLimit message, length delimited. Does not implicitly {@link lnrpc.FeeLimit.verify|verify} messages.
         * @param message FeeLimit message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IFeeLimit, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeLimit message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeLimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.FeeLimit;

        /**
         * Decodes a FeeLimit message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeLimit
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.FeeLimit;

        /**
         * Verifies a FeeLimit message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeLimit message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeLimit
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.FeeLimit;

        /**
         * Creates a plain object from a FeeLimit message. Also converts values to other types if specified.
         * @param message FeeLimit
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.FeeLimit, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeLimit to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendRequest. */
    interface ISendRequest {

        /** The identity pubkey of the payment recipient */
        dest?: (Uint8Array|null);

        /** The hex-encoded identity pubkey of the payment recipient */
        destString?: (string|null);

        /** Number of satoshis to send. */
        amt?: (number|Long|null);

        /** The hash to use within the payment's HTLC */
        paymentHash?: (Uint8Array|null);

        /** The hex-encoded hash to use within the payment's HTLC */
        paymentHashString?: (string|null);

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        paymentRequest?: (string|null);

        /**
         * The CLTV delta from the current height that should be used to set the
         * timelock for the final hop.
         */
        finalCltvDelta?: (number|null);

        /**
         * The maximum number of satoshis that will be paid as a fee of the payment.
         * This value can be represented either as a percentage of the amount being
         * sent, or as a fixed amount of the maximum fee the user is willing the pay to
         * send the payment.
         */
        feeLimit?: (lnrpc.IFeeLimit|null);
    }

    /** Represents a SendRequest. */
    class SendRequest implements ISendRequest {

        /**
         * Constructs a new SendRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendRequest);

        /** The identity pubkey of the payment recipient */
        public dest: Uint8Array;

        /** The hex-encoded identity pubkey of the payment recipient */
        public destString: string;

        /** Number of satoshis to send. */
        public amt: (number|Long);

        /** The hash to use within the payment's HTLC */
        public paymentHash: Uint8Array;

        /** The hex-encoded hash to use within the payment's HTLC */
        public paymentHashString: string;

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        public paymentRequest: string;

        /**
         * The CLTV delta from the current height that should be used to set the
         * timelock for the final hop.
         */
        public finalCltvDelta: number;

        /**
         * The maximum number of satoshis that will be paid as a fee of the payment.
         * This value can be represented either as a percentage of the amount being
         * sent, or as a fixed amount of the maximum fee the user is willing the pay to
         * send the payment.
         */
        public feeLimit?: (lnrpc.IFeeLimit|null);

        /**
         * Creates a new SendRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendRequest instance
         */
        public static create(properties?: lnrpc.ISendRequest): lnrpc.SendRequest;

        /**
         * Encodes the specified SendRequest message. Does not implicitly {@link lnrpc.SendRequest.verify|verify} messages.
         * @param message SendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendRequest message, length delimited. Does not implicitly {@link lnrpc.SendRequest.verify|verify} messages.
         * @param message SendRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendRequest;

        /**
         * Decodes a SendRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendRequest;

        /**
         * Verifies a SendRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendRequest;

        /**
         * Creates a plain object from a SendRequest message. Also converts values to other types if specified.
         * @param message SendRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendResponse. */
    interface ISendResponse {

        /** SendResponse paymentError */
        paymentError?: (string|null);

        /** SendResponse paymentPreimage */
        paymentPreimage?: (Uint8Array|null);

        /** SendResponse paymentRoute */
        paymentRoute?: (lnrpc.IRoute|null);
    }

    /** Represents a SendResponse. */
    class SendResponse implements ISendResponse {

        /**
         * Constructs a new SendResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendResponse);

        /** SendResponse paymentError. */
        public paymentError: string;

        /** SendResponse paymentPreimage. */
        public paymentPreimage: Uint8Array;

        /** SendResponse paymentRoute. */
        public paymentRoute?: (lnrpc.IRoute|null);

        /**
         * Creates a new SendResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendResponse instance
         */
        public static create(properties?: lnrpc.ISendResponse): lnrpc.SendResponse;

        /**
         * Encodes the specified SendResponse message. Does not implicitly {@link lnrpc.SendResponse.verify|verify} messages.
         * @param message SendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendResponse message, length delimited. Does not implicitly {@link lnrpc.SendResponse.verify|verify} messages.
         * @param message SendResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendResponse;

        /**
         * Decodes a SendResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendResponse;

        /**
         * Verifies a SendResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendResponse;

        /**
         * Creates a plain object from a SendResponse message. Also converts values to other types if specified.
         * @param message SendResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendToRouteRequest. */
    interface ISendToRouteRequest {

        /** The payment hash to use for the HTLC. */
        paymentHash?: (Uint8Array|null);

        /** An optional hex-encoded payment hash to be used for the HTLC. */
        paymentHashString?: (string|null);

        /** The set of routes that should be used to attempt to complete the payment. */
        routes?: (lnrpc.IRoute[]|null);
    }

    /** Represents a SendToRouteRequest. */
    class SendToRouteRequest implements ISendToRouteRequest {

        /**
         * Constructs a new SendToRouteRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendToRouteRequest);

        /** The payment hash to use for the HTLC. */
        public paymentHash: Uint8Array;

        /** An optional hex-encoded payment hash to be used for the HTLC. */
        public paymentHashString: string;

        /** The set of routes that should be used to attempt to complete the payment. */
        public routes: lnrpc.IRoute[];

        /**
         * Creates a new SendToRouteRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendToRouteRequest instance
         */
        public static create(properties?: lnrpc.ISendToRouteRequest): lnrpc.SendToRouteRequest;

        /**
         * Encodes the specified SendToRouteRequest message. Does not implicitly {@link lnrpc.SendToRouteRequest.verify|verify} messages.
         * @param message SendToRouteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendToRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendToRouteRequest message, length delimited. Does not implicitly {@link lnrpc.SendToRouteRequest.verify|verify} messages.
         * @param message SendToRouteRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendToRouteRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendToRouteRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendToRouteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendToRouteRequest;

        /**
         * Decodes a SendToRouteRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendToRouteRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendToRouteRequest;

        /**
         * Verifies a SendToRouteRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendToRouteRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendToRouteRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendToRouteRequest;

        /**
         * Creates a plain object from a SendToRouteRequest message. Also converts values to other types if specified.
         * @param message SendToRouteRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendToRouteRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendToRouteRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelPoint. */
    interface IChannelPoint {

        /** Txid of the funding transaction */
        fundingTxidBytes?: (Uint8Array|null);

        /** Hex-encoded string representing the funding transaction */
        fundingTxidStr?: (string|null);

        /** The index of the output of the funding transaction */
        outputIndex?: (number|null);
    }

    /** Represents a ChannelPoint. */
    class ChannelPoint implements IChannelPoint {

        /**
         * Constructs a new ChannelPoint.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelPoint);

        /** Txid of the funding transaction */
        public fundingTxidBytes: Uint8Array;

        /** Hex-encoded string representing the funding transaction */
        public fundingTxidStr: string;

        /** The index of the output of the funding transaction */
        public outputIndex: number;

        /** ChannelPoint fundingTxid. */
        public fundingTxid?: ("fundingTxidBytes"|"fundingTxidStr");

        /**
         * Creates a new ChannelPoint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelPoint instance
         */
        public static create(properties?: lnrpc.IChannelPoint): lnrpc.ChannelPoint;

        /**
         * Encodes the specified ChannelPoint message. Does not implicitly {@link lnrpc.ChannelPoint.verify|verify} messages.
         * @param message ChannelPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelPoint message, length delimited. Does not implicitly {@link lnrpc.ChannelPoint.verify|verify} messages.
         * @param message ChannelPoint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelPoint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelPoint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelPoint;

        /**
         * Decodes a ChannelPoint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelPoint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelPoint;

        /**
         * Verifies a ChannelPoint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelPoint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelPoint
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelPoint;

        /**
         * Creates a plain object from a ChannelPoint message. Also converts values to other types if specified.
         * @param message ChannelPoint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelPoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelPoint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LightningAddress. */
    interface ILightningAddress {

        /** The identity pubkey of the Lightning node */
        pubkey?: (string|null);

        /** The network location of the lightning node, e.g. `69.69.69.69:1337` or `localhost:10011` */
        host?: (string|null);
    }

    /** Represents a LightningAddress. */
    class LightningAddress implements ILightningAddress {

        /**
         * Constructs a new LightningAddress.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ILightningAddress);

        /** The identity pubkey of the Lightning node */
        public pubkey: string;

        /** The network location of the lightning node, e.g. `69.69.69.69:1337` or `localhost:10011` */
        public host: string;

        /**
         * Creates a new LightningAddress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LightningAddress instance
         */
        public static create(properties?: lnrpc.ILightningAddress): lnrpc.LightningAddress;

        /**
         * Encodes the specified LightningAddress message. Does not implicitly {@link lnrpc.LightningAddress.verify|verify} messages.
         * @param message LightningAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ILightningAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LightningAddress message, length delimited. Does not implicitly {@link lnrpc.LightningAddress.verify|verify} messages.
         * @param message LightningAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ILightningAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LightningAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LightningAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.LightningAddress;

        /**
         * Decodes a LightningAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LightningAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.LightningAddress;

        /**
         * Verifies a LightningAddress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LightningAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LightningAddress
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.LightningAddress;

        /**
         * Creates a plain object from a LightningAddress message. Also converts values to other types if specified.
         * @param message LightningAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.LightningAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LightningAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendManyRequest. */
    interface ISendManyRequest {

        /** The map from addresses to amounts */
        AddrToAmount?: ({ [k: string]: (number|Long) }|null);

        /** The target number of blocks that this transaction should be confirmed by. */
        targetConf?: (number|null);

        /** A manual fee rate set in sat/byte that should be used when crafting the transaction. */
        satPerByte?: (number|Long|null);
    }

    /** Represents a SendManyRequest. */
    class SendManyRequest implements ISendManyRequest {

        /**
         * Constructs a new SendManyRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendManyRequest);

        /** The map from addresses to amounts */
        public AddrToAmount: { [k: string]: (number|Long) };

        /** The target number of blocks that this transaction should be confirmed by. */
        public targetConf: number;

        /** A manual fee rate set in sat/byte that should be used when crafting the transaction. */
        public satPerByte: (number|Long);

        /**
         * Creates a new SendManyRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendManyRequest instance
         */
        public static create(properties?: lnrpc.ISendManyRequest): lnrpc.SendManyRequest;

        /**
         * Encodes the specified SendManyRequest message. Does not implicitly {@link lnrpc.SendManyRequest.verify|verify} messages.
         * @param message SendManyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendManyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendManyRequest message, length delimited. Does not implicitly {@link lnrpc.SendManyRequest.verify|verify} messages.
         * @param message SendManyRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendManyRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendManyRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendManyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendManyRequest;

        /**
         * Decodes a SendManyRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendManyRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendManyRequest;

        /**
         * Verifies a SendManyRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendManyRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendManyRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendManyRequest;

        /**
         * Creates a plain object from a SendManyRequest message. Also converts values to other types if specified.
         * @param message SendManyRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendManyRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendManyRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendManyResponse. */
    interface ISendManyResponse {

        /** The id of the transaction */
        txid?: (string|null);
    }

    /** Represents a SendManyResponse. */
    class SendManyResponse implements ISendManyResponse {

        /**
         * Constructs a new SendManyResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendManyResponse);

        /** The id of the transaction */
        public txid: string;

        /**
         * Creates a new SendManyResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendManyResponse instance
         */
        public static create(properties?: lnrpc.ISendManyResponse): lnrpc.SendManyResponse;

        /**
         * Encodes the specified SendManyResponse message. Does not implicitly {@link lnrpc.SendManyResponse.verify|verify} messages.
         * @param message SendManyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendManyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendManyResponse message, length delimited. Does not implicitly {@link lnrpc.SendManyResponse.verify|verify} messages.
         * @param message SendManyResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendManyResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendManyResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendManyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendManyResponse;

        /**
         * Decodes a SendManyResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendManyResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendManyResponse;

        /**
         * Verifies a SendManyResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendManyResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendManyResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendManyResponse;

        /**
         * Creates a plain object from a SendManyResponse message. Also converts values to other types if specified.
         * @param message SendManyResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendManyResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendManyResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCoinsRequest. */
    interface ISendCoinsRequest {

        /** The address to send coins to */
        addr?: (string|null);

        /** The amount in satoshis to send */
        amount?: (number|Long|null);

        /** The target number of blocks that this transaction should be confirmed by. */
        targetConf?: (number|null);

        /** A manual fee rate set in sat/byte that should be used when crafting the transaction. */
        satPerByte?: (number|Long|null);
    }

    /** Represents a SendCoinsRequest. */
    class SendCoinsRequest implements ISendCoinsRequest {

        /**
         * Constructs a new SendCoinsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendCoinsRequest);

        /** The address to send coins to */
        public addr: string;

        /** The amount in satoshis to send */
        public amount: (number|Long);

        /** The target number of blocks that this transaction should be confirmed by. */
        public targetConf: number;

        /** A manual fee rate set in sat/byte that should be used when crafting the transaction. */
        public satPerByte: (number|Long);

        /**
         * Creates a new SendCoinsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCoinsRequest instance
         */
        public static create(properties?: lnrpc.ISendCoinsRequest): lnrpc.SendCoinsRequest;

        /**
         * Encodes the specified SendCoinsRequest message. Does not implicitly {@link lnrpc.SendCoinsRequest.verify|verify} messages.
         * @param message SendCoinsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendCoinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinsRequest message, length delimited. Does not implicitly {@link lnrpc.SendCoinsRequest.verify|verify} messages.
         * @param message SendCoinsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendCoinsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendCoinsRequest;

        /**
         * Decodes a SendCoinsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendCoinsRequest;

        /**
         * Verifies a SendCoinsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCoinsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCoinsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendCoinsRequest;

        /**
         * Creates a plain object from a SendCoinsRequest message. Also converts values to other types if specified.
         * @param message SendCoinsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendCoinsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCoinsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SendCoinsResponse. */
    interface ISendCoinsResponse {

        /** The transaction ID of the transaction */
        txid?: (string|null);
    }

    /** Represents a SendCoinsResponse. */
    class SendCoinsResponse implements ISendCoinsResponse {

        /**
         * Constructs a new SendCoinsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISendCoinsResponse);

        /** The transaction ID of the transaction */
        public txid: string;

        /**
         * Creates a new SendCoinsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SendCoinsResponse instance
         */
        public static create(properties?: lnrpc.ISendCoinsResponse): lnrpc.SendCoinsResponse;

        /**
         * Encodes the specified SendCoinsResponse message. Does not implicitly {@link lnrpc.SendCoinsResponse.verify|verify} messages.
         * @param message SendCoinsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISendCoinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SendCoinsResponse message, length delimited. Does not implicitly {@link lnrpc.SendCoinsResponse.verify|verify} messages.
         * @param message SendCoinsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISendCoinsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SendCoinsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SendCoinsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SendCoinsResponse;

        /**
         * Decodes a SendCoinsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SendCoinsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SendCoinsResponse;

        /**
         * Verifies a SendCoinsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SendCoinsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SendCoinsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SendCoinsResponse;

        /**
         * Creates a plain object from a SendCoinsResponse message. Also converts values to other types if specified.
         * @param message SendCoinsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SendCoinsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SendCoinsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewAddressRequest. */
    interface INewAddressRequest {

        /** The address type */
        type?: (lnrpc.NewAddressRequest.AddressType|null);
    }

    /**
     * `AddressType` has to be one of:
     *
     * - `p2wkh`: Pay to witness key hash (`WITNESS_PUBKEY_HASH` = 0)
     * - `np2wkh`: Pay to nested witness key hash (`NESTED_PUBKEY_HASH` = 1)
     * - `p2pkh`:  Pay to public key hash (`PUBKEY_HASH` = 2)
     */
    class NewAddressRequest implements INewAddressRequest {

        /**
         * Constructs a new NewAddressRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INewAddressRequest);

        /** The address type */
        public type: lnrpc.NewAddressRequest.AddressType;

        /**
         * Creates a new NewAddressRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewAddressRequest instance
         */
        public static create(properties?: lnrpc.INewAddressRequest): lnrpc.NewAddressRequest;

        /**
         * Encodes the specified NewAddressRequest message. Does not implicitly {@link lnrpc.NewAddressRequest.verify|verify} messages.
         * @param message NewAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INewAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewAddressRequest message, length delimited. Does not implicitly {@link lnrpc.NewAddressRequest.verify|verify} messages.
         * @param message NewAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INewAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewAddressRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NewAddressRequest;

        /**
         * Decodes a NewAddressRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NewAddressRequest;

        /**
         * Verifies a NewAddressRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewAddressRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NewAddressRequest;

        /**
         * Creates a plain object from a NewAddressRequest message. Also converts values to other types if specified.
         * @param message NewAddressRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NewAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewAddressRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace NewAddressRequest {

        /** AddressType enum. */
        enum AddressType {
            WITNESS_PUBKEY_HASH = 0,
            NESTED_PUBKEY_HASH = 1
        }
    }

    /** Properties of a NewWitnessAddressRequest. */
    interface INewWitnessAddressRequest {
    }

    /** Represents a NewWitnessAddressRequest. */
    class NewWitnessAddressRequest implements INewWitnessAddressRequest {

        /**
         * Constructs a new NewWitnessAddressRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INewWitnessAddressRequest);

        /**
         * Creates a new NewWitnessAddressRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewWitnessAddressRequest instance
         */
        public static create(properties?: lnrpc.INewWitnessAddressRequest): lnrpc.NewWitnessAddressRequest;

        /**
         * Encodes the specified NewWitnessAddressRequest message. Does not implicitly {@link lnrpc.NewWitnessAddressRequest.verify|verify} messages.
         * @param message NewWitnessAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INewWitnessAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewWitnessAddressRequest message, length delimited. Does not implicitly {@link lnrpc.NewWitnessAddressRequest.verify|verify} messages.
         * @param message NewWitnessAddressRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INewWitnessAddressRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewWitnessAddressRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewWitnessAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NewWitnessAddressRequest;

        /**
         * Decodes a NewWitnessAddressRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewWitnessAddressRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NewWitnessAddressRequest;

        /**
         * Verifies a NewWitnessAddressRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewWitnessAddressRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewWitnessAddressRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NewWitnessAddressRequest;

        /**
         * Creates a plain object from a NewWitnessAddressRequest message. Also converts values to other types if specified.
         * @param message NewWitnessAddressRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NewWitnessAddressRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewWitnessAddressRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NewAddressResponse. */
    interface INewAddressResponse {

        /** The newly generated wallet address */
        address?: (string|null);
    }

    /** Represents a NewAddressResponse. */
    class NewAddressResponse implements INewAddressResponse {

        /**
         * Constructs a new NewAddressResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INewAddressResponse);

        /** The newly generated wallet address */
        public address: string;

        /**
         * Creates a new NewAddressResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NewAddressResponse instance
         */
        public static create(properties?: lnrpc.INewAddressResponse): lnrpc.NewAddressResponse;

        /**
         * Encodes the specified NewAddressResponse message. Does not implicitly {@link lnrpc.NewAddressResponse.verify|verify} messages.
         * @param message NewAddressResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INewAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NewAddressResponse message, length delimited. Does not implicitly {@link lnrpc.NewAddressResponse.verify|verify} messages.
         * @param message NewAddressResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INewAddressResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewAddressResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NewAddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NewAddressResponse;

        /**
         * Decodes a NewAddressResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NewAddressResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NewAddressResponse;

        /**
         * Verifies a NewAddressResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NewAddressResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NewAddressResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NewAddressResponse;

        /**
         * Creates a plain object from a NewAddressResponse message. Also converts values to other types if specified.
         * @param message NewAddressResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NewAddressResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NewAddressResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignMessageRequest. */
    interface ISignMessageRequest {

        /** The message to be signed */
        msg?: (Uint8Array|null);
    }

    /** Represents a SignMessageRequest. */
    class SignMessageRequest implements ISignMessageRequest {

        /**
         * Constructs a new SignMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISignMessageRequest);

        /** The message to be signed */
        public msg: Uint8Array;

        /**
         * Creates a new SignMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignMessageRequest instance
         */
        public static create(properties?: lnrpc.ISignMessageRequest): lnrpc.SignMessageRequest;

        /**
         * Encodes the specified SignMessageRequest message. Does not implicitly {@link lnrpc.SignMessageRequest.verify|verify} messages.
         * @param message SignMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISignMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignMessageRequest message, length delimited. Does not implicitly {@link lnrpc.SignMessageRequest.verify|verify} messages.
         * @param message SignMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISignMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SignMessageRequest;

        /**
         * Decodes a SignMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SignMessageRequest;

        /**
         * Verifies a SignMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignMessageRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SignMessageRequest;

        /**
         * Creates a plain object from a SignMessageRequest message. Also converts values to other types if specified.
         * @param message SignMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SignMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignMessageResponse. */
    interface ISignMessageResponse {

        /** The signature for the given message */
        signature?: (string|null);
    }

    /** Represents a SignMessageResponse. */
    class SignMessageResponse implements ISignMessageResponse {

        /**
         * Constructs a new SignMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ISignMessageResponse);

        /** The signature for the given message */
        public signature: string;

        /**
         * Creates a new SignMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignMessageResponse instance
         */
        public static create(properties?: lnrpc.ISignMessageResponse): lnrpc.SignMessageResponse;

        /**
         * Encodes the specified SignMessageResponse message. Does not implicitly {@link lnrpc.SignMessageResponse.verify|verify} messages.
         * @param message SignMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ISignMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignMessageResponse message, length delimited. Does not implicitly {@link lnrpc.SignMessageResponse.verify|verify} messages.
         * @param message SignMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ISignMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.SignMessageResponse;

        /**
         * Decodes a SignMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.SignMessageResponse;

        /**
         * Verifies a SignMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.SignMessageResponse;

        /**
         * Creates a plain object from a SignMessageResponse message. Also converts values to other types if specified.
         * @param message SignMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.SignMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyMessageRequest. */
    interface IVerifyMessageRequest {

        /** The message over which the signature is to be verified */
        msg?: (Uint8Array|null);

        /** The signature to be verified over the given message */
        signature?: (string|null);
    }

    /** Represents a VerifyMessageRequest. */
    class VerifyMessageRequest implements IVerifyMessageRequest {

        /**
         * Constructs a new VerifyMessageRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IVerifyMessageRequest);

        /** The message over which the signature is to be verified */
        public msg: Uint8Array;

        /** The signature to be verified over the given message */
        public signature: string;

        /**
         * Creates a new VerifyMessageRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyMessageRequest instance
         */
        public static create(properties?: lnrpc.IVerifyMessageRequest): lnrpc.VerifyMessageRequest;

        /**
         * Encodes the specified VerifyMessageRequest message. Does not implicitly {@link lnrpc.VerifyMessageRequest.verify|verify} messages.
         * @param message VerifyMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IVerifyMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyMessageRequest message, length delimited. Does not implicitly {@link lnrpc.VerifyMessageRequest.verify|verify} messages.
         * @param message VerifyMessageRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IVerifyMessageRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyMessageRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.VerifyMessageRequest;

        /**
         * Decodes a VerifyMessageRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyMessageRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.VerifyMessageRequest;

        /**
         * Verifies a VerifyMessageRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyMessageRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyMessageRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.VerifyMessageRequest;

        /**
         * Creates a plain object from a VerifyMessageRequest message. Also converts values to other types if specified.
         * @param message VerifyMessageRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.VerifyMessageRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyMessageRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VerifyMessageResponse. */
    interface IVerifyMessageResponse {

        /** Whether the signature was valid over the given message */
        valid?: (boolean|null);

        /** The pubkey recovered from the signature */
        pubkey?: (string|null);
    }

    /** Represents a VerifyMessageResponse. */
    class VerifyMessageResponse implements IVerifyMessageResponse {

        /**
         * Constructs a new VerifyMessageResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IVerifyMessageResponse);

        /** Whether the signature was valid over the given message */
        public valid: boolean;

        /** The pubkey recovered from the signature */
        public pubkey: string;

        /**
         * Creates a new VerifyMessageResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VerifyMessageResponse instance
         */
        public static create(properties?: lnrpc.IVerifyMessageResponse): lnrpc.VerifyMessageResponse;

        /**
         * Encodes the specified VerifyMessageResponse message. Does not implicitly {@link lnrpc.VerifyMessageResponse.verify|verify} messages.
         * @param message VerifyMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IVerifyMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VerifyMessageResponse message, length delimited. Does not implicitly {@link lnrpc.VerifyMessageResponse.verify|verify} messages.
         * @param message VerifyMessageResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IVerifyMessageResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VerifyMessageResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VerifyMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.VerifyMessageResponse;

        /**
         * Decodes a VerifyMessageResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VerifyMessageResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.VerifyMessageResponse;

        /**
         * Verifies a VerifyMessageResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VerifyMessageResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VerifyMessageResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.VerifyMessageResponse;

        /**
         * Creates a plain object from a VerifyMessageResponse message. Also converts values to other types if specified.
         * @param message VerifyMessageResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.VerifyMessageResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VerifyMessageResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectPeerRequest. */
    interface IConnectPeerRequest {

        /** Lightning address of the peer, in the format `<pubkey>@host` */
        addr?: (lnrpc.ILightningAddress|null);

        /**
         * If set, the daemon will attempt to persistently connect to the target
         * peer.  Otherwise, the call will be synchronous.
         */
        perm?: (boolean|null);
    }

    /** Represents a ConnectPeerRequest. */
    class ConnectPeerRequest implements IConnectPeerRequest {

        /**
         * Constructs a new ConnectPeerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IConnectPeerRequest);

        /** Lightning address of the peer, in the format `<pubkey>@host` */
        public addr?: (lnrpc.ILightningAddress|null);

        /**
         * If set, the daemon will attempt to persistently connect to the target
         * peer.  Otherwise, the call will be synchronous.
         */
        public perm: boolean;

        /**
         * Creates a new ConnectPeerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectPeerRequest instance
         */
        public static create(properties?: lnrpc.IConnectPeerRequest): lnrpc.ConnectPeerRequest;

        /**
         * Encodes the specified ConnectPeerRequest message. Does not implicitly {@link lnrpc.ConnectPeerRequest.verify|verify} messages.
         * @param message ConnectPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IConnectPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectPeerRequest message, length delimited. Does not implicitly {@link lnrpc.ConnectPeerRequest.verify|verify} messages.
         * @param message ConnectPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IConnectPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectPeerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ConnectPeerRequest;

        /**
         * Decodes a ConnectPeerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ConnectPeerRequest;

        /**
         * Verifies a ConnectPeerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectPeerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectPeerRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ConnectPeerRequest;

        /**
         * Creates a plain object from a ConnectPeerRequest message. Also converts values to other types if specified.
         * @param message ConnectPeerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ConnectPeerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectPeerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConnectPeerResponse. */
    interface IConnectPeerResponse {
    }

    /** Represents a ConnectPeerResponse. */
    class ConnectPeerResponse implements IConnectPeerResponse {

        /**
         * Constructs a new ConnectPeerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IConnectPeerResponse);

        /**
         * Creates a new ConnectPeerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConnectPeerResponse instance
         */
        public static create(properties?: lnrpc.IConnectPeerResponse): lnrpc.ConnectPeerResponse;

        /**
         * Encodes the specified ConnectPeerResponse message. Does not implicitly {@link lnrpc.ConnectPeerResponse.verify|verify} messages.
         * @param message ConnectPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IConnectPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConnectPeerResponse message, length delimited. Does not implicitly {@link lnrpc.ConnectPeerResponse.verify|verify} messages.
         * @param message ConnectPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IConnectPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConnectPeerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConnectPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ConnectPeerResponse;

        /**
         * Decodes a ConnectPeerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConnectPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ConnectPeerResponse;

        /**
         * Verifies a ConnectPeerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConnectPeerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConnectPeerResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ConnectPeerResponse;

        /**
         * Creates a plain object from a ConnectPeerResponse message. Also converts values to other types if specified.
         * @param message ConnectPeerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ConnectPeerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConnectPeerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DisconnectPeerRequest. */
    interface IDisconnectPeerRequest {

        /** The pubkey of the node to disconnect from */
        pubKey?: (string|null);
    }

    /** Represents a DisconnectPeerRequest. */
    class DisconnectPeerRequest implements IDisconnectPeerRequest {

        /**
         * Constructs a new DisconnectPeerRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDisconnectPeerRequest);

        /** The pubkey of the node to disconnect from */
        public pubKey: string;

        /**
         * Creates a new DisconnectPeerRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectPeerRequest instance
         */
        public static create(properties?: lnrpc.IDisconnectPeerRequest): lnrpc.DisconnectPeerRequest;

        /**
         * Encodes the specified DisconnectPeerRequest message. Does not implicitly {@link lnrpc.DisconnectPeerRequest.verify|verify} messages.
         * @param message DisconnectPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDisconnectPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectPeerRequest message, length delimited. Does not implicitly {@link lnrpc.DisconnectPeerRequest.verify|verify} messages.
         * @param message DisconnectPeerRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDisconnectPeerRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectPeerRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisconnectPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DisconnectPeerRequest;

        /**
         * Decodes a DisconnectPeerRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisconnectPeerRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DisconnectPeerRequest;

        /**
         * Verifies a DisconnectPeerRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectPeerRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectPeerRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DisconnectPeerRequest;

        /**
         * Creates a plain object from a DisconnectPeerRequest message. Also converts values to other types if specified.
         * @param message DisconnectPeerRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DisconnectPeerRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectPeerRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DisconnectPeerResponse. */
    interface IDisconnectPeerResponse {
    }

    /** Represents a DisconnectPeerResponse. */
    class DisconnectPeerResponse implements IDisconnectPeerResponse {

        /**
         * Constructs a new DisconnectPeerResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDisconnectPeerResponse);

        /**
         * Creates a new DisconnectPeerResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DisconnectPeerResponse instance
         */
        public static create(properties?: lnrpc.IDisconnectPeerResponse): lnrpc.DisconnectPeerResponse;

        /**
         * Encodes the specified DisconnectPeerResponse message. Does not implicitly {@link lnrpc.DisconnectPeerResponse.verify|verify} messages.
         * @param message DisconnectPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDisconnectPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DisconnectPeerResponse message, length delimited. Does not implicitly {@link lnrpc.DisconnectPeerResponse.verify|verify} messages.
         * @param message DisconnectPeerResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDisconnectPeerResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DisconnectPeerResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DisconnectPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DisconnectPeerResponse;

        /**
         * Decodes a DisconnectPeerResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DisconnectPeerResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DisconnectPeerResponse;

        /**
         * Verifies a DisconnectPeerResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DisconnectPeerResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DisconnectPeerResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DisconnectPeerResponse;

        /**
         * Creates a plain object from a DisconnectPeerResponse message. Also converts values to other types if specified.
         * @param message DisconnectPeerResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DisconnectPeerResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DisconnectPeerResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HTLC. */
    interface IHTLC {

        /** HTLC incoming */
        incoming?: (boolean|null);

        /** HTLC amount */
        amount?: (number|Long|null);

        /** HTLC hashLock */
        hashLock?: (Uint8Array|null);

        /** HTLC expirationHeight */
        expirationHeight?: (number|null);
    }

    /** Represents a HTLC. */
    class HTLC implements IHTLC {

        /**
         * Constructs a new HTLC.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IHTLC);

        /** HTLC incoming. */
        public incoming: boolean;

        /** HTLC amount. */
        public amount: (number|Long);

        /** HTLC hashLock. */
        public hashLock: Uint8Array;

        /** HTLC expirationHeight. */
        public expirationHeight: number;

        /**
         * Creates a new HTLC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HTLC instance
         */
        public static create(properties?: lnrpc.IHTLC): lnrpc.HTLC;

        /**
         * Encodes the specified HTLC message. Does not implicitly {@link lnrpc.HTLC.verify|verify} messages.
         * @param message HTLC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IHTLC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HTLC message, length delimited. Does not implicitly {@link lnrpc.HTLC.verify|verify} messages.
         * @param message HTLC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IHTLC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HTLC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.HTLC;

        /**
         * Decodes a HTLC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.HTLC;

        /**
         * Verifies a HTLC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HTLC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HTLC
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.HTLC;

        /**
         * Creates a plain object from a HTLC message. Also converts values to other types if specified.
         * @param message HTLC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.HTLC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HTLC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Channel. */
    interface IChannel {

        /** Whether this channel is active or not */
        active?: (boolean|null);

        /** The identity pubkey of the remote node */
        remotePubkey?: (string|null);

        /**
         * The outpoint (txid:index) of the funding transaction. With this value, Bob
         * will be able to generate a signature for Alice's version of the commitment
         * transaction.
         */
        channelPoint?: (string|null);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        chanId?: (number|Long|null);

        /** The total amount of funds held in this channel */
        capacity?: (number|Long|null);

        /** This node's current balance in this channel */
        localBalance?: (number|Long|null);

        /** The counterparty's current balance in this channel */
        remoteBalance?: (number|Long|null);

        /**
         * The amount calculated to be paid in fees for the current set of commitment
         * transactions. The fee amount is persisted with the channel in order to
         * allow the fee amount to be removed and recalculated with each channel state
         * update, including updates that happen after a system restart.
         */
        commitFee?: (number|Long|null);

        /** The weight of the commitment transaction */
        commitWeight?: (number|Long|null);

        /**
         * The required number of satoshis per kilo-weight that the requester will pay
         * at all times, for both the funding transaction and commitment transaction.
         * This value can later be updated once the channel is open.
         */
        feePerKw?: (number|Long|null);

        /** The unsettled balance in this channel */
        unsettledBalance?: (number|Long|null);

        /** The total number of satoshis we've sent within this channel. */
        totalSatoshisSent?: (number|Long|null);

        /** The total number of satoshis we've received within this channel. */
        totalSatoshisReceived?: (number|Long|null);

        /** The total number of updates conducted within this channel. */
        numUpdates?: (number|Long|null);

        /** The list of active, uncleared HTLCs currently pending within the channel. */
        pendingHtlcs?: (lnrpc.IHTLC[]|null);

        /**
         * The CSV delay expressed in relative blocks. If the channel is force
         * closed, we'll need to wait for this many blocks before we can regain our
         * funds.
         */
        csvDelay?: (number|null);

        /** Whether this channel is advertised to the network or not */
        "private"?: (boolean|null);
    }

    /** Represents a Channel. */
    class Channel implements IChannel {

        /**
         * Constructs a new Channel.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannel);

        /** Whether this channel is active or not */
        public active: boolean;

        /** The identity pubkey of the remote node */
        public remotePubkey: string;

        /**
         * The outpoint (txid:index) of the funding transaction. With this value, Bob
         * will be able to generate a signature for Alice's version of the commitment
         * transaction.
         */
        public channelPoint: string;

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public chanId: (number|Long);

        /** The total amount of funds held in this channel */
        public capacity: (number|Long);

        /** This node's current balance in this channel */
        public localBalance: (number|Long);

        /** The counterparty's current balance in this channel */
        public remoteBalance: (number|Long);

        /**
         * The amount calculated to be paid in fees for the current set of commitment
         * transactions. The fee amount is persisted with the channel in order to
         * allow the fee amount to be removed and recalculated with each channel state
         * update, including updates that happen after a system restart.
         */
        public commitFee: (number|Long);

        /** The weight of the commitment transaction */
        public commitWeight: (number|Long);

        /**
         * The required number of satoshis per kilo-weight that the requester will pay
         * at all times, for both the funding transaction and commitment transaction.
         * This value can later be updated once the channel is open.
         */
        public feePerKw: (number|Long);

        /** The unsettled balance in this channel */
        public unsettledBalance: (number|Long);

        /** The total number of satoshis we've sent within this channel. */
        public totalSatoshisSent: (number|Long);

        /** The total number of satoshis we've received within this channel. */
        public totalSatoshisReceived: (number|Long);

        /** The total number of updates conducted within this channel. */
        public numUpdates: (number|Long);

        /** The list of active, uncleared HTLCs currently pending within the channel. */
        public pendingHtlcs: lnrpc.IHTLC[];

        /**
         * The CSV delay expressed in relative blocks. If the channel is force
         * closed, we'll need to wait for this many blocks before we can regain our
         * funds.
         */
        public csvDelay: number;

        /** Whether this channel is advertised to the network or not */
        public private: boolean;

        /**
         * Creates a new Channel instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Channel instance
         */
        public static create(properties?: lnrpc.IChannel): lnrpc.Channel;

        /**
         * Encodes the specified Channel message. Does not implicitly {@link lnrpc.Channel.verify|verify} messages.
         * @param message Channel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Channel message, length delimited. Does not implicitly {@link lnrpc.Channel.verify|verify} messages.
         * @param message Channel message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannel, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Channel message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Channel;

        /**
         * Decodes a Channel message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Channel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Channel;

        /**
         * Verifies a Channel message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Channel message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Channel
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Channel;

        /**
         * Creates a plain object from a Channel message. Also converts values to other types if specified.
         * @param message Channel
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Channel, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Channel to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListChannelsRequest. */
    interface IListChannelsRequest {

        /** ListChannelsRequest activeOnly */
        activeOnly?: (boolean|null);

        /** ListChannelsRequest inactiveOnly */
        inactiveOnly?: (boolean|null);

        /** ListChannelsRequest publicOnly */
        publicOnly?: (boolean|null);

        /** ListChannelsRequest privateOnly */
        privateOnly?: (boolean|null);
    }

    /** Represents a ListChannelsRequest. */
    class ListChannelsRequest implements IListChannelsRequest {

        /**
         * Constructs a new ListChannelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListChannelsRequest);

        /** ListChannelsRequest activeOnly. */
        public activeOnly: boolean;

        /** ListChannelsRequest inactiveOnly. */
        public inactiveOnly: boolean;

        /** ListChannelsRequest publicOnly. */
        public publicOnly: boolean;

        /** ListChannelsRequest privateOnly. */
        public privateOnly: boolean;

        /**
         * Creates a new ListChannelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListChannelsRequest instance
         */
        public static create(properties?: lnrpc.IListChannelsRequest): lnrpc.ListChannelsRequest;

        /**
         * Encodes the specified ListChannelsRequest message. Does not implicitly {@link lnrpc.ListChannelsRequest.verify|verify} messages.
         * @param message ListChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListChannelsRequest message, length delimited. Does not implicitly {@link lnrpc.ListChannelsRequest.verify|verify} messages.
         * @param message ListChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListChannelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListChannelsRequest;

        /**
         * Decodes a ListChannelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListChannelsRequest;

        /**
         * Verifies a ListChannelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListChannelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListChannelsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListChannelsRequest;

        /**
         * Creates a plain object from a ListChannelsRequest message. Also converts values to other types if specified.
         * @param message ListChannelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListChannelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListChannelsResponse. */
    interface IListChannelsResponse {

        /** The list of active channels */
        channels?: (lnrpc.IChannel[]|null);
    }

    /** Represents a ListChannelsResponse. */
    class ListChannelsResponse implements IListChannelsResponse {

        /**
         * Constructs a new ListChannelsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListChannelsResponse);

        /** The list of active channels */
        public channels: lnrpc.IChannel[];

        /**
         * Creates a new ListChannelsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListChannelsResponse instance
         */
        public static create(properties?: lnrpc.IListChannelsResponse): lnrpc.ListChannelsResponse;

        /**
         * Encodes the specified ListChannelsResponse message. Does not implicitly {@link lnrpc.ListChannelsResponse.verify|verify} messages.
         * @param message ListChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListChannelsResponse message, length delimited. Does not implicitly {@link lnrpc.ListChannelsResponse.verify|verify} messages.
         * @param message ListChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListChannelsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListChannelsResponse;

        /**
         * Decodes a ListChannelsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListChannelsResponse;

        /**
         * Verifies a ListChannelsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListChannelsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListChannelsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListChannelsResponse;

        /**
         * Creates a plain object from a ListChannelsResponse message. Also converts values to other types if specified.
         * @param message ListChannelsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListChannelsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelCloseSummary. */
    interface IChannelCloseSummary {

        /** The outpoint (txid:index) of the funding transaction. */
        channelPoint?: (string|null);

        /** The unique channel ID for the channel. */
        chanId?: (number|Long|null);

        /** The hash of the genesis block that this channel resides within. */
        chainHash?: (string|null);

        /** The txid of the transaction which ultimately closed this channel. */
        closingTxHash?: (string|null);

        /** Public key of the remote peer that we formerly had a channel with. */
        remotePubkey?: (string|null);

        /** Total capacity of the channel. */
        capacity?: (number|Long|null);

        /** Height at which the funding transaction was spent. */
        closeHeight?: (number|null);

        /** Settled balance at the time of channel closure */
        settledBalance?: (number|Long|null);

        /** The sum of all the time-locked outputs at the time of channel closure */
        timeLockedBalance?: (number|Long|null);

        /** Details on how the channel was closed. */
        closeType?: (lnrpc.ChannelCloseSummary.ClosureType|null);
    }

    /** Represents a ChannelCloseSummary. */
    class ChannelCloseSummary implements IChannelCloseSummary {

        /**
         * Constructs a new ChannelCloseSummary.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelCloseSummary);

        /** The outpoint (txid:index) of the funding transaction. */
        public channelPoint: string;

        /** The unique channel ID for the channel. */
        public chanId: (number|Long);

        /** The hash of the genesis block that this channel resides within. */
        public chainHash: string;

        /** The txid of the transaction which ultimately closed this channel. */
        public closingTxHash: string;

        /** Public key of the remote peer that we formerly had a channel with. */
        public remotePubkey: string;

        /** Total capacity of the channel. */
        public capacity: (number|Long);

        /** Height at which the funding transaction was spent. */
        public closeHeight: number;

        /** Settled balance at the time of channel closure */
        public settledBalance: (number|Long);

        /** The sum of all the time-locked outputs at the time of channel closure */
        public timeLockedBalance: (number|Long);

        /** Details on how the channel was closed. */
        public closeType: lnrpc.ChannelCloseSummary.ClosureType;

        /**
         * Creates a new ChannelCloseSummary instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelCloseSummary instance
         */
        public static create(properties?: lnrpc.IChannelCloseSummary): lnrpc.ChannelCloseSummary;

        /**
         * Encodes the specified ChannelCloseSummary message. Does not implicitly {@link lnrpc.ChannelCloseSummary.verify|verify} messages.
         * @param message ChannelCloseSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelCloseSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelCloseSummary message, length delimited. Does not implicitly {@link lnrpc.ChannelCloseSummary.verify|verify} messages.
         * @param message ChannelCloseSummary message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelCloseSummary, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelCloseSummary message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelCloseSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelCloseSummary;

        /**
         * Decodes a ChannelCloseSummary message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelCloseSummary
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelCloseSummary;

        /**
         * Verifies a ChannelCloseSummary message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelCloseSummary message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelCloseSummary
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelCloseSummary;

        /**
         * Creates a plain object from a ChannelCloseSummary message. Also converts values to other types if specified.
         * @param message ChannelCloseSummary
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelCloseSummary, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelCloseSummary to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace ChannelCloseSummary {

        /** ClosureType enum. */
        enum ClosureType {
            COOPERATIVE_CLOSE = 0,
            LOCAL_FORCE_CLOSE = 1,
            REMOTE_FORCE_CLOSE = 2,
            BREACH_CLOSE = 3,
            FUNDING_CANCELED = 4
        }
    }

    /** Properties of a ClosedChannelsRequest. */
    interface IClosedChannelsRequest {

        /** ClosedChannelsRequest cooperative */
        cooperative?: (boolean|null);

        /** ClosedChannelsRequest localForce */
        localForce?: (boolean|null);

        /** ClosedChannelsRequest remoteForce */
        remoteForce?: (boolean|null);

        /** ClosedChannelsRequest breach */
        breach?: (boolean|null);

        /** ClosedChannelsRequest fundingCanceled */
        fundingCanceled?: (boolean|null);
    }

    /** Represents a ClosedChannelsRequest. */
    class ClosedChannelsRequest implements IClosedChannelsRequest {

        /**
         * Constructs a new ClosedChannelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IClosedChannelsRequest);

        /** ClosedChannelsRequest cooperative. */
        public cooperative: boolean;

        /** ClosedChannelsRequest localForce. */
        public localForce: boolean;

        /** ClosedChannelsRequest remoteForce. */
        public remoteForce: boolean;

        /** ClosedChannelsRequest breach. */
        public breach: boolean;

        /** ClosedChannelsRequest fundingCanceled. */
        public fundingCanceled: boolean;

        /**
         * Creates a new ClosedChannelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClosedChannelsRequest instance
         */
        public static create(properties?: lnrpc.IClosedChannelsRequest): lnrpc.ClosedChannelsRequest;

        /**
         * Encodes the specified ClosedChannelsRequest message. Does not implicitly {@link lnrpc.ClosedChannelsRequest.verify|verify} messages.
         * @param message ClosedChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IClosedChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClosedChannelsRequest message, length delimited. Does not implicitly {@link lnrpc.ClosedChannelsRequest.verify|verify} messages.
         * @param message ClosedChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IClosedChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosedChannelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClosedChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ClosedChannelsRequest;

        /**
         * Decodes a ClosedChannelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClosedChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ClosedChannelsRequest;

        /**
         * Verifies a ClosedChannelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClosedChannelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClosedChannelsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ClosedChannelsRequest;

        /**
         * Creates a plain object from a ClosedChannelsRequest message. Also converts values to other types if specified.
         * @param message ClosedChannelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ClosedChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClosedChannelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClosedChannelsResponse. */
    interface IClosedChannelsResponse {

        /** ClosedChannelsResponse channels */
        channels?: (lnrpc.IChannelCloseSummary[]|null);
    }

    /** Represents a ClosedChannelsResponse. */
    class ClosedChannelsResponse implements IClosedChannelsResponse {

        /**
         * Constructs a new ClosedChannelsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IClosedChannelsResponse);

        /** ClosedChannelsResponse channels. */
        public channels: lnrpc.IChannelCloseSummary[];

        /**
         * Creates a new ClosedChannelsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClosedChannelsResponse instance
         */
        public static create(properties?: lnrpc.IClosedChannelsResponse): lnrpc.ClosedChannelsResponse;

        /**
         * Encodes the specified ClosedChannelsResponse message. Does not implicitly {@link lnrpc.ClosedChannelsResponse.verify|verify} messages.
         * @param message ClosedChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IClosedChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClosedChannelsResponse message, length delimited. Does not implicitly {@link lnrpc.ClosedChannelsResponse.verify|verify} messages.
         * @param message ClosedChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IClosedChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosedChannelsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClosedChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ClosedChannelsResponse;

        /**
         * Decodes a ClosedChannelsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClosedChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ClosedChannelsResponse;

        /**
         * Verifies a ClosedChannelsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClosedChannelsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClosedChannelsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ClosedChannelsResponse;

        /**
         * Creates a plain object from a ClosedChannelsResponse message. Also converts values to other types if specified.
         * @param message ClosedChannelsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ClosedChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClosedChannelsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Peer. */
    interface IPeer {

        /** The identity pubkey of the peer */
        pubKey?: (string|null);

        /** Network address of the peer; eg `127.0.0.1:10011` */
        address?: (string|null);

        /** Bytes of data transmitted to this peer */
        bytesSent?: (number|Long|null);

        /** Bytes of data transmitted from this peer */
        bytesRecv?: (number|Long|null);

        /** Satoshis sent to this peer */
        satSent?: (number|Long|null);

        /** Satoshis received from this peer */
        satRecv?: (number|Long|null);

        /** A channel is inbound if the counterparty initiated the channel */
        inbound?: (boolean|null);

        /** Ping time to this peer */
        pingTime?: (number|Long|null);
    }

    /** Represents a Peer. */
    class Peer implements IPeer {

        /**
         * Constructs a new Peer.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPeer);

        /** The identity pubkey of the peer */
        public pubKey: string;

        /** Network address of the peer; eg `127.0.0.1:10011` */
        public address: string;

        /** Bytes of data transmitted to this peer */
        public bytesSent: (number|Long);

        /** Bytes of data transmitted from this peer */
        public bytesRecv: (number|Long);

        /** Satoshis sent to this peer */
        public satSent: (number|Long);

        /** Satoshis received from this peer */
        public satRecv: (number|Long);

        /** A channel is inbound if the counterparty initiated the channel */
        public inbound: boolean;

        /** Ping time to this peer */
        public pingTime: (number|Long);

        /**
         * Creates a new Peer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Peer instance
         */
        public static create(properties?: lnrpc.IPeer): lnrpc.Peer;

        /**
         * Encodes the specified Peer message. Does not implicitly {@link lnrpc.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Peer message, length delimited. Does not implicitly {@link lnrpc.Peer.verify|verify} messages.
         * @param message Peer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPeer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Peer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Peer;

        /**
         * Decodes a Peer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Peer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Peer;

        /**
         * Verifies a Peer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Peer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Peer
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Peer;

        /**
         * Creates a plain object from a Peer message. Also converts values to other types if specified.
         * @param message Peer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Peer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Peer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPeersRequest. */
    interface IListPeersRequest {
    }

    /** Represents a ListPeersRequest. */
    class ListPeersRequest implements IListPeersRequest {

        /**
         * Constructs a new ListPeersRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListPeersRequest);

        /**
         * Creates a new ListPeersRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPeersRequest instance
         */
        public static create(properties?: lnrpc.IListPeersRequest): lnrpc.ListPeersRequest;

        /**
         * Encodes the specified ListPeersRequest message. Does not implicitly {@link lnrpc.ListPeersRequest.verify|verify} messages.
         * @param message ListPeersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListPeersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPeersRequest message, length delimited. Does not implicitly {@link lnrpc.ListPeersRequest.verify|verify} messages.
         * @param message ListPeersRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListPeersRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPeersRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPeersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListPeersRequest;

        /**
         * Decodes a ListPeersRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPeersRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListPeersRequest;

        /**
         * Verifies a ListPeersRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPeersRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPeersRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListPeersRequest;

        /**
         * Creates a plain object from a ListPeersRequest message. Also converts values to other types if specified.
         * @param message ListPeersRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListPeersRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPeersRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPeersResponse. */
    interface IListPeersResponse {

        /** The list of currently connected peers */
        peers?: (lnrpc.IPeer[]|null);
    }

    /** Represents a ListPeersResponse. */
    class ListPeersResponse implements IListPeersResponse {

        /**
         * Constructs a new ListPeersResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListPeersResponse);

        /** The list of currently connected peers */
        public peers: lnrpc.IPeer[];

        /**
         * Creates a new ListPeersResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPeersResponse instance
         */
        public static create(properties?: lnrpc.IListPeersResponse): lnrpc.ListPeersResponse;

        /**
         * Encodes the specified ListPeersResponse message. Does not implicitly {@link lnrpc.ListPeersResponse.verify|verify} messages.
         * @param message ListPeersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListPeersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPeersResponse message, length delimited. Does not implicitly {@link lnrpc.ListPeersResponse.verify|verify} messages.
         * @param message ListPeersResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListPeersResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPeersResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPeersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListPeersResponse;

        /**
         * Decodes a ListPeersResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPeersResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListPeersResponse;

        /**
         * Verifies a ListPeersResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPeersResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPeersResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListPeersResponse;

        /**
         * Creates a plain object from a ListPeersResponse message. Also converts values to other types if specified.
         * @param message ListPeersResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListPeersResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPeersResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetInfoRequest. */
    interface IGetInfoRequest {
    }

    /** Represents a GetInfoRequest. */
    class GetInfoRequest implements IGetInfoRequest {

        /**
         * Constructs a new GetInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGetInfoRequest);

        /**
         * Creates a new GetInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetInfoRequest instance
         */
        public static create(properties?: lnrpc.IGetInfoRequest): lnrpc.GetInfoRequest;

        /**
         * Encodes the specified GetInfoRequest message. Does not implicitly {@link lnrpc.GetInfoRequest.verify|verify} messages.
         * @param message GetInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGetInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetInfoRequest message, length delimited. Does not implicitly {@link lnrpc.GetInfoRequest.verify|verify} messages.
         * @param message GetInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGetInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GetInfoRequest;

        /**
         * Decodes a GetInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GetInfoRequest;

        /**
         * Verifies a GetInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GetInfoRequest;

        /**
         * Creates a plain object from a GetInfoRequest message. Also converts values to other types if specified.
         * @param message GetInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GetInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GetInfoResponse. */
    interface IGetInfoResponse {

        /** The identity pubkey of the current node. */
        identityPubkey?: (string|null);

        /** If applicable, the alias of the current node, e.g. "bob" */
        alias?: (string|null);

        /** Number of pending channels */
        numPendingChannels?: (number|null);

        /** Number of active channels */
        numActiveChannels?: (number|null);

        /** Number of peers */
        numPeers?: (number|null);

        /** The node's current view of the height of the best block */
        blockHeight?: (number|null);

        /** The node's current view of the hash of the best block */
        blockHash?: (string|null);

        /** Whether the wallet's view is synced to the main chain */
        syncedToChain?: (boolean|null);

        /** Whether the current node is connected to testnet */
        testnet?: (boolean|null);

        /** A list of active chains the node is connected to */
        chains?: (string[]|null);

        /** The URIs of the current node. */
        uris?: (string[]|null);

        /** Timestamp of the block best known to the wallet */
        bestHeaderTimestamp?: (number|Long|null);

        /** The version of the LND software that the node is running. */
        version?: (string|null);
    }

    /** Represents a GetInfoResponse. */
    class GetInfoResponse implements IGetInfoResponse {

        /**
         * Constructs a new GetInfoResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGetInfoResponse);

        /** The identity pubkey of the current node. */
        public identityPubkey: string;

        /** If applicable, the alias of the current node, e.g. "bob" */
        public alias: string;

        /** Number of pending channels */
        public numPendingChannels: number;

        /** Number of active channels */
        public numActiveChannels: number;

        /** Number of peers */
        public numPeers: number;

        /** The node's current view of the height of the best block */
        public blockHeight: number;

        /** The node's current view of the hash of the best block */
        public blockHash: string;

        /** Whether the wallet's view is synced to the main chain */
        public syncedToChain: boolean;

        /** Whether the current node is connected to testnet */
        public testnet: boolean;

        /** A list of active chains the node is connected to */
        public chains: string[];

        /** The URIs of the current node. */
        public uris: string[];

        /** Timestamp of the block best known to the wallet */
        public bestHeaderTimestamp: (number|Long);

        /** The version of the LND software that the node is running. */
        public version: string;

        /**
         * Creates a new GetInfoResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GetInfoResponse instance
         */
        public static create(properties?: lnrpc.IGetInfoResponse): lnrpc.GetInfoResponse;

        /**
         * Encodes the specified GetInfoResponse message. Does not implicitly {@link lnrpc.GetInfoResponse.verify|verify} messages.
         * @param message GetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GetInfoResponse message, length delimited. Does not implicitly {@link lnrpc.GetInfoResponse.verify|verify} messages.
         * @param message GetInfoResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGetInfoResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GetInfoResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GetInfoResponse;

        /**
         * Decodes a GetInfoResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GetInfoResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GetInfoResponse;

        /**
         * Verifies a GetInfoResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GetInfoResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GetInfoResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GetInfoResponse;

        /**
         * Creates a plain object from a GetInfoResponse message. Also converts values to other types if specified.
         * @param message GetInfoResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GetInfoResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GetInfoResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ConfirmationUpdate. */
    interface IConfirmationUpdate {

        /** ConfirmationUpdate blockSha */
        blockSha?: (Uint8Array|null);

        /** ConfirmationUpdate blockHeight */
        blockHeight?: (number|null);

        /** ConfirmationUpdate numConfsLeft */
        numConfsLeft?: (number|null);
    }

    /** Represents a ConfirmationUpdate. */
    class ConfirmationUpdate implements IConfirmationUpdate {

        /**
         * Constructs a new ConfirmationUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IConfirmationUpdate);

        /** ConfirmationUpdate blockSha. */
        public blockSha: Uint8Array;

        /** ConfirmationUpdate blockHeight. */
        public blockHeight: number;

        /** ConfirmationUpdate numConfsLeft. */
        public numConfsLeft: number;

        /**
         * Creates a new ConfirmationUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ConfirmationUpdate instance
         */
        public static create(properties?: lnrpc.IConfirmationUpdate): lnrpc.ConfirmationUpdate;

        /**
         * Encodes the specified ConfirmationUpdate message. Does not implicitly {@link lnrpc.ConfirmationUpdate.verify|verify} messages.
         * @param message ConfirmationUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IConfirmationUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ConfirmationUpdate message, length delimited. Does not implicitly {@link lnrpc.ConfirmationUpdate.verify|verify} messages.
         * @param message ConfirmationUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IConfirmationUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ConfirmationUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ConfirmationUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ConfirmationUpdate;

        /**
         * Decodes a ConfirmationUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ConfirmationUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ConfirmationUpdate;

        /**
         * Verifies a ConfirmationUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ConfirmationUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ConfirmationUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ConfirmationUpdate;

        /**
         * Creates a plain object from a ConfirmationUpdate message. Also converts values to other types if specified.
         * @param message ConfirmationUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ConfirmationUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ConfirmationUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelOpenUpdate. */
    interface IChannelOpenUpdate {

        /** ChannelOpenUpdate channelPoint */
        channelPoint?: (lnrpc.IChannelPoint|null);
    }

    /** Represents a ChannelOpenUpdate. */
    class ChannelOpenUpdate implements IChannelOpenUpdate {

        /**
         * Constructs a new ChannelOpenUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelOpenUpdate);

        /** ChannelOpenUpdate channelPoint. */
        public channelPoint?: (lnrpc.IChannelPoint|null);

        /**
         * Creates a new ChannelOpenUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelOpenUpdate instance
         */
        public static create(properties?: lnrpc.IChannelOpenUpdate): lnrpc.ChannelOpenUpdate;

        /**
         * Encodes the specified ChannelOpenUpdate message. Does not implicitly {@link lnrpc.ChannelOpenUpdate.verify|verify} messages.
         * @param message ChannelOpenUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelOpenUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelOpenUpdate message, length delimited. Does not implicitly {@link lnrpc.ChannelOpenUpdate.verify|verify} messages.
         * @param message ChannelOpenUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelOpenUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelOpenUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelOpenUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelOpenUpdate;

        /**
         * Decodes a ChannelOpenUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelOpenUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelOpenUpdate;

        /**
         * Verifies a ChannelOpenUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelOpenUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelOpenUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelOpenUpdate;

        /**
         * Creates a plain object from a ChannelOpenUpdate message. Also converts values to other types if specified.
         * @param message ChannelOpenUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelOpenUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelOpenUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelCloseUpdate. */
    interface IChannelCloseUpdate {

        /** ChannelCloseUpdate closingTxid */
        closingTxid?: (Uint8Array|null);

        /** ChannelCloseUpdate success */
        success?: (boolean|null);
    }

    /** Represents a ChannelCloseUpdate. */
    class ChannelCloseUpdate implements IChannelCloseUpdate {

        /**
         * Constructs a new ChannelCloseUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelCloseUpdate);

        /** ChannelCloseUpdate closingTxid. */
        public closingTxid: Uint8Array;

        /** ChannelCloseUpdate success. */
        public success: boolean;

        /**
         * Creates a new ChannelCloseUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelCloseUpdate instance
         */
        public static create(properties?: lnrpc.IChannelCloseUpdate): lnrpc.ChannelCloseUpdate;

        /**
         * Encodes the specified ChannelCloseUpdate message. Does not implicitly {@link lnrpc.ChannelCloseUpdate.verify|verify} messages.
         * @param message ChannelCloseUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelCloseUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelCloseUpdate message, length delimited. Does not implicitly {@link lnrpc.ChannelCloseUpdate.verify|verify} messages.
         * @param message ChannelCloseUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelCloseUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelCloseUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelCloseUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelCloseUpdate;

        /**
         * Decodes a ChannelCloseUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelCloseUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelCloseUpdate;

        /**
         * Verifies a ChannelCloseUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelCloseUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelCloseUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelCloseUpdate;

        /**
         * Creates a plain object from a ChannelCloseUpdate message. Also converts values to other types if specified.
         * @param message ChannelCloseUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelCloseUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelCloseUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CloseChannelRequest. */
    interface ICloseChannelRequest {

        /**
         * The outpoint (txid:index) of the funding transaction. With this value, Bob
         * will be able to generate a signature for Alice's version of the commitment
         * transaction.
         */
        channelPoint?: (lnrpc.IChannelPoint|null);

        /** If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast. */
        force?: (boolean|null);

        /** The target number of blocks that the closure transaction should be confirmed by. */
        targetConf?: (number|null);

        /** A manual fee rate set in sat/byte that should be used when crafting the closure transaction. */
        satPerByte?: (number|Long|null);
    }

    /** Represents a CloseChannelRequest. */
    class CloseChannelRequest implements ICloseChannelRequest {

        /**
         * Constructs a new CloseChannelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ICloseChannelRequest);

        /**
         * The outpoint (txid:index) of the funding transaction. With this value, Bob
         * will be able to generate a signature for Alice's version of the commitment
         * transaction.
         */
        public channelPoint?: (lnrpc.IChannelPoint|null);

        /** If true, then the channel will be closed forcibly. This means the current commitment transaction will be signed and broadcast. */
        public force: boolean;

        /** The target number of blocks that the closure transaction should be confirmed by. */
        public targetConf: number;

        /** A manual fee rate set in sat/byte that should be used when crafting the closure transaction. */
        public satPerByte: (number|Long);

        /**
         * Creates a new CloseChannelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseChannelRequest instance
         */
        public static create(properties?: lnrpc.ICloseChannelRequest): lnrpc.CloseChannelRequest;

        /**
         * Encodes the specified CloseChannelRequest message. Does not implicitly {@link lnrpc.CloseChannelRequest.verify|verify} messages.
         * @param message CloseChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ICloseChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseChannelRequest message, length delimited. Does not implicitly {@link lnrpc.CloseChannelRequest.verify|verify} messages.
         * @param message CloseChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ICloseChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseChannelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.CloseChannelRequest;

        /**
         * Decodes a CloseChannelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.CloseChannelRequest;

        /**
         * Verifies a CloseChannelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseChannelRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.CloseChannelRequest;

        /**
         * Creates a plain object from a CloseChannelRequest message. Also converts values to other types if specified.
         * @param message CloseChannelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.CloseChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseChannelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CloseStatusUpdate. */
    interface ICloseStatusUpdate {

        /** CloseStatusUpdate closePending */
        closePending?: (lnrpc.IPendingUpdate|null);

        /** CloseStatusUpdate confirmation */
        confirmation?: (lnrpc.IConfirmationUpdate|null);

        /** CloseStatusUpdate chanClose */
        chanClose?: (lnrpc.IChannelCloseUpdate|null);
    }

    /** Represents a CloseStatusUpdate. */
    class CloseStatusUpdate implements ICloseStatusUpdate {

        /**
         * Constructs a new CloseStatusUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ICloseStatusUpdate);

        /** CloseStatusUpdate closePending. */
        public closePending?: (lnrpc.IPendingUpdate|null);

        /** CloseStatusUpdate confirmation. */
        public confirmation?: (lnrpc.IConfirmationUpdate|null);

        /** CloseStatusUpdate chanClose. */
        public chanClose?: (lnrpc.IChannelCloseUpdate|null);

        /** CloseStatusUpdate update. */
        public update?: ("closePending"|"confirmation"|"chanClose");

        /**
         * Creates a new CloseStatusUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CloseStatusUpdate instance
         */
        public static create(properties?: lnrpc.ICloseStatusUpdate): lnrpc.CloseStatusUpdate;

        /**
         * Encodes the specified CloseStatusUpdate message. Does not implicitly {@link lnrpc.CloseStatusUpdate.verify|verify} messages.
         * @param message CloseStatusUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ICloseStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CloseStatusUpdate message, length delimited. Does not implicitly {@link lnrpc.CloseStatusUpdate.verify|verify} messages.
         * @param message CloseStatusUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ICloseStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CloseStatusUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CloseStatusUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.CloseStatusUpdate;

        /**
         * Decodes a CloseStatusUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CloseStatusUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.CloseStatusUpdate;

        /**
         * Verifies a CloseStatusUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CloseStatusUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CloseStatusUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.CloseStatusUpdate;

        /**
         * Creates a plain object from a CloseStatusUpdate message. Also converts values to other types if specified.
         * @param message CloseStatusUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.CloseStatusUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CloseStatusUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PendingUpdate. */
    interface IPendingUpdate {

        /** PendingUpdate txid */
        txid?: (Uint8Array|null);

        /** PendingUpdate outputIndex */
        outputIndex?: (number|null);
    }

    /** Represents a PendingUpdate. */
    class PendingUpdate implements IPendingUpdate {

        /**
         * Constructs a new PendingUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPendingUpdate);

        /** PendingUpdate txid. */
        public txid: Uint8Array;

        /** PendingUpdate outputIndex. */
        public outputIndex: number;

        /**
         * Creates a new PendingUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PendingUpdate instance
         */
        public static create(properties?: lnrpc.IPendingUpdate): lnrpc.PendingUpdate;

        /**
         * Encodes the specified PendingUpdate message. Does not implicitly {@link lnrpc.PendingUpdate.verify|verify} messages.
         * @param message PendingUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPendingUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PendingUpdate message, length delimited. Does not implicitly {@link lnrpc.PendingUpdate.verify|verify} messages.
         * @param message PendingUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPendingUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PendingUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PendingUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingUpdate;

        /**
         * Decodes a PendingUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PendingUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingUpdate;

        /**
         * Verifies a PendingUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PendingUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PendingUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PendingUpdate;

        /**
         * Creates a plain object from a PendingUpdate message. Also converts values to other types if specified.
         * @param message PendingUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PendingUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PendingUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenChannelRequest. */
    interface IOpenChannelRequest {

        /** The pubkey of the node to open a channel with */
        nodePubkey?: (Uint8Array|null);

        /** The hex encoded pubkey of the node to open a channel with */
        nodePubkeyString?: (string|null);

        /** The number of satoshis the wallet should commit to the channel */
        localFundingAmount?: (number|Long|null);

        /** The number of satoshis to push to the remote side as part of the initial commitment state */
        pushSat?: (number|Long|null);

        /** The target number of blocks that the funding transaction should be confirmed by. */
        targetConf?: (number|null);

        /** A manual fee rate set in sat/byte that should be used when crafting the funding transaction. */
        satPerByte?: (number|Long|null);

        /** Whether this channel should be private, not announced to the greater network. */
        "private"?: (boolean|null);

        /** The minimum value in millisatoshi we will require for incoming HTLCs on the channel. */
        minHtlcMsat?: (number|Long|null);

        /** The delay we require on the remote's commitment transaction. If this is not set, it will be scaled automatically with the channel size. */
        remoteCsvDelay?: (number|null);
    }

    /** Represents an OpenChannelRequest. */
    class OpenChannelRequest implements IOpenChannelRequest {

        /**
         * Constructs a new OpenChannelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IOpenChannelRequest);

        /** The pubkey of the node to open a channel with */
        public nodePubkey: Uint8Array;

        /** The hex encoded pubkey of the node to open a channel with */
        public nodePubkeyString: string;

        /** The number of satoshis the wallet should commit to the channel */
        public localFundingAmount: (number|Long);

        /** The number of satoshis to push to the remote side as part of the initial commitment state */
        public pushSat: (number|Long);

        /** The target number of blocks that the funding transaction should be confirmed by. */
        public targetConf: number;

        /** A manual fee rate set in sat/byte that should be used when crafting the funding transaction. */
        public satPerByte: (number|Long);

        /** Whether this channel should be private, not announced to the greater network. */
        public private: boolean;

        /** The minimum value in millisatoshi we will require for incoming HTLCs on the channel. */
        public minHtlcMsat: (number|Long);

        /** The delay we require on the remote's commitment transaction. If this is not set, it will be scaled automatically with the channel size. */
        public remoteCsvDelay: number;

        /**
         * Creates a new OpenChannelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenChannelRequest instance
         */
        public static create(properties?: lnrpc.IOpenChannelRequest): lnrpc.OpenChannelRequest;

        /**
         * Encodes the specified OpenChannelRequest message. Does not implicitly {@link lnrpc.OpenChannelRequest.verify|verify} messages.
         * @param message OpenChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IOpenChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenChannelRequest message, length delimited. Does not implicitly {@link lnrpc.OpenChannelRequest.verify|verify} messages.
         * @param message OpenChannelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IOpenChannelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenChannelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.OpenChannelRequest;

        /**
         * Decodes an OpenChannelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenChannelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.OpenChannelRequest;

        /**
         * Verifies an OpenChannelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenChannelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenChannelRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.OpenChannelRequest;

        /**
         * Creates a plain object from an OpenChannelRequest message. Also converts values to other types if specified.
         * @param message OpenChannelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.OpenChannelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenChannelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OpenStatusUpdate. */
    interface IOpenStatusUpdate {

        /** OpenStatusUpdate chanPending */
        chanPending?: (lnrpc.IPendingUpdate|null);

        /** OpenStatusUpdate confirmation */
        confirmation?: (lnrpc.IConfirmationUpdate|null);

        /** OpenStatusUpdate chanOpen */
        chanOpen?: (lnrpc.IChannelOpenUpdate|null);
    }

    /** Represents an OpenStatusUpdate. */
    class OpenStatusUpdate implements IOpenStatusUpdate {

        /**
         * Constructs a new OpenStatusUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IOpenStatusUpdate);

        /** OpenStatusUpdate chanPending. */
        public chanPending?: (lnrpc.IPendingUpdate|null);

        /** OpenStatusUpdate confirmation. */
        public confirmation?: (lnrpc.IConfirmationUpdate|null);

        /** OpenStatusUpdate chanOpen. */
        public chanOpen?: (lnrpc.IChannelOpenUpdate|null);

        /** OpenStatusUpdate update. */
        public update?: ("chanPending"|"confirmation"|"chanOpen");

        /**
         * Creates a new OpenStatusUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OpenStatusUpdate instance
         */
        public static create(properties?: lnrpc.IOpenStatusUpdate): lnrpc.OpenStatusUpdate;

        /**
         * Encodes the specified OpenStatusUpdate message. Does not implicitly {@link lnrpc.OpenStatusUpdate.verify|verify} messages.
         * @param message OpenStatusUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IOpenStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OpenStatusUpdate message, length delimited. Does not implicitly {@link lnrpc.OpenStatusUpdate.verify|verify} messages.
         * @param message OpenStatusUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IOpenStatusUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenStatusUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OpenStatusUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.OpenStatusUpdate;

        /**
         * Decodes an OpenStatusUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OpenStatusUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.OpenStatusUpdate;

        /**
         * Verifies an OpenStatusUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OpenStatusUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OpenStatusUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.OpenStatusUpdate;

        /**
         * Creates a plain object from an OpenStatusUpdate message. Also converts values to other types if specified.
         * @param message OpenStatusUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.OpenStatusUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OpenStatusUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PendingHTLC. */
    interface IPendingHTLC {

        /** The direction within the channel that the htlc was sent */
        incoming?: (boolean|null);

        /** The total value of the htlc */
        amount?: (number|Long|null);

        /** The final output to be swept back to the user's wallet */
        outpoint?: (string|null);

        /** The next block height at which we can spend the current stage */
        maturityHeight?: (number|null);

        /**
         * The number of blocks remaining until the current stage can be swept.
         * Negative values indicate how many blocks have passed since becoming
         * mature.
         */
        blocksTilMaturity?: (number|null);

        /** Indicates whether the htlc is in its first or second stage of recovery */
        stage?: (number|null);
    }

    /** Represents a PendingHTLC. */
    class PendingHTLC implements IPendingHTLC {

        /**
         * Constructs a new PendingHTLC.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPendingHTLC);

        /** The direction within the channel that the htlc was sent */
        public incoming: boolean;

        /** The total value of the htlc */
        public amount: (number|Long);

        /** The final output to be swept back to the user's wallet */
        public outpoint: string;

        /** The next block height at which we can spend the current stage */
        public maturityHeight: number;

        /**
         * The number of blocks remaining until the current stage can be swept.
         * Negative values indicate how many blocks have passed since becoming
         * mature.
         */
        public blocksTilMaturity: number;

        /** Indicates whether the htlc is in its first or second stage of recovery */
        public stage: number;

        /**
         * Creates a new PendingHTLC instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PendingHTLC instance
         */
        public static create(properties?: lnrpc.IPendingHTLC): lnrpc.PendingHTLC;

        /**
         * Encodes the specified PendingHTLC message. Does not implicitly {@link lnrpc.PendingHTLC.verify|verify} messages.
         * @param message PendingHTLC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPendingHTLC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PendingHTLC message, length delimited. Does not implicitly {@link lnrpc.PendingHTLC.verify|verify} messages.
         * @param message PendingHTLC message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPendingHTLC, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PendingHTLC message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PendingHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingHTLC;

        /**
         * Decodes a PendingHTLC message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PendingHTLC
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingHTLC;

        /**
         * Verifies a PendingHTLC message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PendingHTLC message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PendingHTLC
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PendingHTLC;

        /**
         * Creates a plain object from a PendingHTLC message. Also converts values to other types if specified.
         * @param message PendingHTLC
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PendingHTLC, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PendingHTLC to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PendingChannelsRequest. */
    interface IPendingChannelsRequest {
    }

    /** Represents a PendingChannelsRequest. */
    class PendingChannelsRequest implements IPendingChannelsRequest {

        /**
         * Constructs a new PendingChannelsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPendingChannelsRequest);

        /**
         * Creates a new PendingChannelsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PendingChannelsRequest instance
         */
        public static create(properties?: lnrpc.IPendingChannelsRequest): lnrpc.PendingChannelsRequest;

        /**
         * Encodes the specified PendingChannelsRequest message. Does not implicitly {@link lnrpc.PendingChannelsRequest.verify|verify} messages.
         * @param message PendingChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPendingChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PendingChannelsRequest message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsRequest.verify|verify} messages.
         * @param message PendingChannelsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPendingChannelsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PendingChannelsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PendingChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsRequest;

        /**
         * Decodes a PendingChannelsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PendingChannelsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsRequest;

        /**
         * Verifies a PendingChannelsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PendingChannelsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PendingChannelsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsRequest;

        /**
         * Creates a plain object from a PendingChannelsRequest message. Also converts values to other types if specified.
         * @param message PendingChannelsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PendingChannelsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PendingChannelsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PendingChannelsResponse. */
    interface IPendingChannelsResponse {

        /** The balance in satoshis encumbered in pending channels */
        totalLimboBalance?: (number|Long|null);

        /** Channels pending opening */
        pendingOpenChannels?: (lnrpc.PendingChannelsResponse.IPendingOpenChannel[]|null);

        /** Channels pending closing */
        pendingClosingChannels?: (lnrpc.PendingChannelsResponse.IClosedChannel[]|null);

        /** Channels pending force closing */
        pendingForceClosingChannels?: (lnrpc.PendingChannelsResponse.IForceClosedChannel[]|null);

        /** Channels waiting for closing tx to confirm */
        waitingCloseChannels?: (lnrpc.PendingChannelsResponse.IWaitingCloseChannel[]|null);
    }

    /** Represents a PendingChannelsResponse. */
    class PendingChannelsResponse implements IPendingChannelsResponse {

        /**
         * Constructs a new PendingChannelsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPendingChannelsResponse);

        /** The balance in satoshis encumbered in pending channels */
        public totalLimboBalance: (number|Long);

        /** Channels pending opening */
        public pendingOpenChannels: lnrpc.PendingChannelsResponse.IPendingOpenChannel[];

        /** Channels pending closing */
        public pendingClosingChannels: lnrpc.PendingChannelsResponse.IClosedChannel[];

        /** Channels pending force closing */
        public pendingForceClosingChannels: lnrpc.PendingChannelsResponse.IForceClosedChannel[];

        /** Channels waiting for closing tx to confirm */
        public waitingCloseChannels: lnrpc.PendingChannelsResponse.IWaitingCloseChannel[];

        /**
         * Creates a new PendingChannelsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PendingChannelsResponse instance
         */
        public static create(properties?: lnrpc.IPendingChannelsResponse): lnrpc.PendingChannelsResponse;

        /**
         * Encodes the specified PendingChannelsResponse message. Does not implicitly {@link lnrpc.PendingChannelsResponse.verify|verify} messages.
         * @param message PendingChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPendingChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PendingChannelsResponse message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.verify|verify} messages.
         * @param message PendingChannelsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPendingChannelsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PendingChannelsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PendingChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse;

        /**
         * Decodes a PendingChannelsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PendingChannelsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse;

        /**
         * Verifies a PendingChannelsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PendingChannelsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PendingChannelsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse;

        /**
         * Creates a plain object from a PendingChannelsResponse message. Also converts values to other types if specified.
         * @param message PendingChannelsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PendingChannelsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PendingChannelsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    namespace PendingChannelsResponse {

        /** Properties of a PendingChannel. */
        interface IPendingChannel {

            /** PendingChannel remoteNodePub */
            remoteNodePub?: (string|null);

            /** PendingChannel channelPoint */
            channelPoint?: (string|null);

            /** PendingChannel capacity */
            capacity?: (number|Long|null);

            /** PendingChannel localBalance */
            localBalance?: (number|Long|null);

            /** PendingChannel remoteBalance */
            remoteBalance?: (number|Long|null);
        }

        /** Represents a PendingChannel. */
        class PendingChannel implements IPendingChannel {

            /**
             * Constructs a new PendingChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: lnrpc.PendingChannelsResponse.IPendingChannel);

            /** PendingChannel remoteNodePub. */
            public remoteNodePub: string;

            /** PendingChannel channelPoint. */
            public channelPoint: string;

            /** PendingChannel capacity. */
            public capacity: (number|Long);

            /** PendingChannel localBalance. */
            public localBalance: (number|Long);

            /** PendingChannel remoteBalance. */
            public remoteBalance: (number|Long);

            /**
             * Creates a new PendingChannel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingChannel instance
             */
            public static create(properties?: lnrpc.PendingChannelsResponse.IPendingChannel): lnrpc.PendingChannelsResponse.PendingChannel;

            /**
             * Encodes the specified PendingChannel message. Does not implicitly {@link lnrpc.PendingChannelsResponse.PendingChannel.verify|verify} messages.
             * @param message PendingChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lnrpc.PendingChannelsResponse.IPendingChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingChannel message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.PendingChannel.verify|verify} messages.
             * @param message PendingChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lnrpc.PendingChannelsResponse.IPendingChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse.PendingChannel;

            /**
             * Decodes a PendingChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse.PendingChannel;

            /**
             * Verifies a PendingChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingChannel
             */
            public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse.PendingChannel;

            /**
             * Creates a plain object from a PendingChannel message. Also converts values to other types if specified.
             * @param message PendingChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lnrpc.PendingChannelsResponse.PendingChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a PendingOpenChannel. */
        interface IPendingOpenChannel {

            /** The pending channel */
            channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The height at which this channel will be confirmed */
            confirmationHeight?: (number|null);

            /**
             * The amount calculated to be paid in fees for the current set of
             * commitment transactions. The fee amount is persisted with the channel
             * in order to allow the fee amount to be removed and recalculated with
             * each channel state update, including updates that happen after a system
             * restart.
             */
            commitFee?: (number|Long|null);

            /** The weight of the commitment transaction */
            commitWeight?: (number|Long|null);

            /**
             * The required number of satoshis per kilo-weight that the requester will
             * pay at all times, for both the funding transaction and commitment
             * transaction. This value can later be updated once the channel is open.
             */
            feePerKw?: (number|Long|null);
        }

        /** Represents a PendingOpenChannel. */
        class PendingOpenChannel implements IPendingOpenChannel {

            /**
             * Constructs a new PendingOpenChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: lnrpc.PendingChannelsResponse.IPendingOpenChannel);

            /** The pending channel */
            public channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The height at which this channel will be confirmed */
            public confirmationHeight: number;

            /**
             * The amount calculated to be paid in fees for the current set of
             * commitment transactions. The fee amount is persisted with the channel
             * in order to allow the fee amount to be removed and recalculated with
             * each channel state update, including updates that happen after a system
             * restart.
             */
            public commitFee: (number|Long);

            /** The weight of the commitment transaction */
            public commitWeight: (number|Long);

            /**
             * The required number of satoshis per kilo-weight that the requester will
             * pay at all times, for both the funding transaction and commitment
             * transaction. This value can later be updated once the channel is open.
             */
            public feePerKw: (number|Long);

            /**
             * Creates a new PendingOpenChannel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PendingOpenChannel instance
             */
            public static create(properties?: lnrpc.PendingChannelsResponse.IPendingOpenChannel): lnrpc.PendingChannelsResponse.PendingOpenChannel;

            /**
             * Encodes the specified PendingOpenChannel message. Does not implicitly {@link lnrpc.PendingChannelsResponse.PendingOpenChannel.verify|verify} messages.
             * @param message PendingOpenChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lnrpc.PendingChannelsResponse.IPendingOpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PendingOpenChannel message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.PendingOpenChannel.verify|verify} messages.
             * @param message PendingOpenChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lnrpc.PendingChannelsResponse.IPendingOpenChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PendingOpenChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PendingOpenChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse.PendingOpenChannel;

            /**
             * Decodes a PendingOpenChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PendingOpenChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse.PendingOpenChannel;

            /**
             * Verifies a PendingOpenChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PendingOpenChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PendingOpenChannel
             */
            public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse.PendingOpenChannel;

            /**
             * Creates a plain object from a PendingOpenChannel message. Also converts values to other types if specified.
             * @param message PendingOpenChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lnrpc.PendingChannelsResponse.PendingOpenChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PendingOpenChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a WaitingCloseChannel. */
        interface IWaitingCloseChannel {

            /** The pending channel waiting for closing tx to confirm */
            channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The balance in satoshis encumbered in this channel */
            limboBalance?: (number|Long|null);
        }

        /** Represents a WaitingCloseChannel. */
        class WaitingCloseChannel implements IWaitingCloseChannel {

            /**
             * Constructs a new WaitingCloseChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: lnrpc.PendingChannelsResponse.IWaitingCloseChannel);

            /** The pending channel waiting for closing tx to confirm */
            public channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The balance in satoshis encumbered in this channel */
            public limboBalance: (number|Long);

            /**
             * Creates a new WaitingCloseChannel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns WaitingCloseChannel instance
             */
            public static create(properties?: lnrpc.PendingChannelsResponse.IWaitingCloseChannel): lnrpc.PendingChannelsResponse.WaitingCloseChannel;

            /**
             * Encodes the specified WaitingCloseChannel message. Does not implicitly {@link lnrpc.PendingChannelsResponse.WaitingCloseChannel.verify|verify} messages.
             * @param message WaitingCloseChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lnrpc.PendingChannelsResponse.IWaitingCloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified WaitingCloseChannel message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.WaitingCloseChannel.verify|verify} messages.
             * @param message WaitingCloseChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lnrpc.PendingChannelsResponse.IWaitingCloseChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a WaitingCloseChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns WaitingCloseChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse.WaitingCloseChannel;

            /**
             * Decodes a WaitingCloseChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns WaitingCloseChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse.WaitingCloseChannel;

            /**
             * Verifies a WaitingCloseChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a WaitingCloseChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns WaitingCloseChannel
             */
            public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse.WaitingCloseChannel;

            /**
             * Creates a plain object from a WaitingCloseChannel message. Also converts values to other types if specified.
             * @param message WaitingCloseChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lnrpc.PendingChannelsResponse.WaitingCloseChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this WaitingCloseChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ClosedChannel. */
        interface IClosedChannel {

            /** The pending channel to be closed */
            channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The transaction id of the closing transaction */
            closingTxid?: (string|null);
        }

        /** Represents a ClosedChannel. */
        class ClosedChannel implements IClosedChannel {

            /**
             * Constructs a new ClosedChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: lnrpc.PendingChannelsResponse.IClosedChannel);

            /** The pending channel to be closed */
            public channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The transaction id of the closing transaction */
            public closingTxid: string;

            /**
             * Creates a new ClosedChannel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ClosedChannel instance
             */
            public static create(properties?: lnrpc.PendingChannelsResponse.IClosedChannel): lnrpc.PendingChannelsResponse.ClosedChannel;

            /**
             * Encodes the specified ClosedChannel message. Does not implicitly {@link lnrpc.PendingChannelsResponse.ClosedChannel.verify|verify} messages.
             * @param message ClosedChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lnrpc.PendingChannelsResponse.IClosedChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ClosedChannel message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.ClosedChannel.verify|verify} messages.
             * @param message ClosedChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lnrpc.PendingChannelsResponse.IClosedChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClosedChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ClosedChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse.ClosedChannel;

            /**
             * Decodes a ClosedChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ClosedChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse.ClosedChannel;

            /**
             * Verifies a ClosedChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ClosedChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ClosedChannel
             */
            public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse.ClosedChannel;

            /**
             * Creates a plain object from a ClosedChannel message. Also converts values to other types if specified.
             * @param message ClosedChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lnrpc.PendingChannelsResponse.ClosedChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ClosedChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ForceClosedChannel. */
        interface IForceClosedChannel {

            /** The pending channel to be force closed */
            channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The transaction id of the closing transaction */
            closingTxid?: (string|null);

            /** The balance in satoshis encumbered in this pending channel */
            limboBalance?: (number|Long|null);

            /** The height at which funds can be sweeped into the wallet */
            maturityHeight?: (number|null);

            /** ForceClosedChannel blocksTilMaturity */
            blocksTilMaturity?: (number|null);

            /** The total value of funds successfully recovered from this channel */
            recoveredBalance?: (number|Long|null);

            /** ForceClosedChannel pendingHtlcs */
            pendingHtlcs?: (lnrpc.IPendingHTLC[]|null);
        }

        /** Represents a ForceClosedChannel. */
        class ForceClosedChannel implements IForceClosedChannel {

            /**
             * Constructs a new ForceClosedChannel.
             * @param [properties] Properties to set
             */
            constructor(properties?: lnrpc.PendingChannelsResponse.IForceClosedChannel);

            /** The pending channel to be force closed */
            public channel?: (lnrpc.PendingChannelsResponse.IPendingChannel|null);

            /** The transaction id of the closing transaction */
            public closingTxid: string;

            /** The balance in satoshis encumbered in this pending channel */
            public limboBalance: (number|Long);

            /** The height at which funds can be sweeped into the wallet */
            public maturityHeight: number;

            /** ForceClosedChannel blocksTilMaturity. */
            public blocksTilMaturity: number;

            /** The total value of funds successfully recovered from this channel */
            public recoveredBalance: (number|Long);

            /** ForceClosedChannel pendingHtlcs. */
            public pendingHtlcs: lnrpc.IPendingHTLC[];

            /**
             * Creates a new ForceClosedChannel instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ForceClosedChannel instance
             */
            public static create(properties?: lnrpc.PendingChannelsResponse.IForceClosedChannel): lnrpc.PendingChannelsResponse.ForceClosedChannel;

            /**
             * Encodes the specified ForceClosedChannel message. Does not implicitly {@link lnrpc.PendingChannelsResponse.ForceClosedChannel.verify|verify} messages.
             * @param message ForceClosedChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: lnrpc.PendingChannelsResponse.IForceClosedChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ForceClosedChannel message, length delimited. Does not implicitly {@link lnrpc.PendingChannelsResponse.ForceClosedChannel.verify|verify} messages.
             * @param message ForceClosedChannel message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: lnrpc.PendingChannelsResponse.IForceClosedChannel, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ForceClosedChannel message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ForceClosedChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PendingChannelsResponse.ForceClosedChannel;

            /**
             * Decodes a ForceClosedChannel message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ForceClosedChannel
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PendingChannelsResponse.ForceClosedChannel;

            /**
             * Verifies a ForceClosedChannel message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ForceClosedChannel message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ForceClosedChannel
             */
            public static fromObject(object: { [k: string]: any }): lnrpc.PendingChannelsResponse.ForceClosedChannel;

            /**
             * Creates a plain object from a ForceClosedChannel message. Also converts values to other types if specified.
             * @param message ForceClosedChannel
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: lnrpc.PendingChannelsResponse.ForceClosedChannel, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ForceClosedChannel to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Properties of a WalletBalanceRequest. */
    interface IWalletBalanceRequest {
    }

    /** Represents a WalletBalanceRequest. */
    class WalletBalanceRequest implements IWalletBalanceRequest {

        /**
         * Constructs a new WalletBalanceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IWalletBalanceRequest);

        /**
         * Creates a new WalletBalanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalletBalanceRequest instance
         */
        public static create(properties?: lnrpc.IWalletBalanceRequest): lnrpc.WalletBalanceRequest;

        /**
         * Encodes the specified WalletBalanceRequest message. Does not implicitly {@link lnrpc.WalletBalanceRequest.verify|verify} messages.
         * @param message WalletBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IWalletBalanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalletBalanceRequest message, length delimited. Does not implicitly {@link lnrpc.WalletBalanceRequest.verify|verify} messages.
         * @param message WalletBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IWalletBalanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalletBalanceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WalletBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.WalletBalanceRequest;

        /**
         * Decodes a WalletBalanceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalletBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.WalletBalanceRequest;

        /**
         * Verifies a WalletBalanceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WalletBalanceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WalletBalanceRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.WalletBalanceRequest;

        /**
         * Creates a plain object from a WalletBalanceRequest message. Also converts values to other types if specified.
         * @param message WalletBalanceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.WalletBalanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalletBalanceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a WalletBalanceResponse. */
    interface IWalletBalanceResponse {

        /** The balance of the wallet */
        totalBalance?: (number|Long|null);

        /** The confirmed balance of a wallet(with >= 1 confirmations) */
        confirmedBalance?: (number|Long|null);

        /** The unconfirmed balance of a wallet(with 0 confirmations) */
        unconfirmedBalance?: (number|Long|null);
    }

    /** Represents a WalletBalanceResponse. */
    class WalletBalanceResponse implements IWalletBalanceResponse {

        /**
         * Constructs a new WalletBalanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IWalletBalanceResponse);

        /** The balance of the wallet */
        public totalBalance: (number|Long);

        /** The confirmed balance of a wallet(with >= 1 confirmations) */
        public confirmedBalance: (number|Long);

        /** The unconfirmed balance of a wallet(with 0 confirmations) */
        public unconfirmedBalance: (number|Long);

        /**
         * Creates a new WalletBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns WalletBalanceResponse instance
         */
        public static create(properties?: lnrpc.IWalletBalanceResponse): lnrpc.WalletBalanceResponse;

        /**
         * Encodes the specified WalletBalanceResponse message. Does not implicitly {@link lnrpc.WalletBalanceResponse.verify|verify} messages.
         * @param message WalletBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IWalletBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified WalletBalanceResponse message, length delimited. Does not implicitly {@link lnrpc.WalletBalanceResponse.verify|verify} messages.
         * @param message WalletBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IWalletBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WalletBalanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns WalletBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.WalletBalanceResponse;

        /**
         * Decodes a WalletBalanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns WalletBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.WalletBalanceResponse;

        /**
         * Verifies a WalletBalanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a WalletBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns WalletBalanceResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.WalletBalanceResponse;

        /**
         * Creates a plain object from a WalletBalanceResponse message. Also converts values to other types if specified.
         * @param message WalletBalanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.WalletBalanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this WalletBalanceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelBalanceRequest. */
    interface IChannelBalanceRequest {
    }

    /** Represents a ChannelBalanceRequest. */
    class ChannelBalanceRequest implements IChannelBalanceRequest {

        /**
         * Constructs a new ChannelBalanceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelBalanceRequest);

        /**
         * Creates a new ChannelBalanceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelBalanceRequest instance
         */
        public static create(properties?: lnrpc.IChannelBalanceRequest): lnrpc.ChannelBalanceRequest;

        /**
         * Encodes the specified ChannelBalanceRequest message. Does not implicitly {@link lnrpc.ChannelBalanceRequest.verify|verify} messages.
         * @param message ChannelBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelBalanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelBalanceRequest message, length delimited. Does not implicitly {@link lnrpc.ChannelBalanceRequest.verify|verify} messages.
         * @param message ChannelBalanceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelBalanceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelBalanceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelBalanceRequest;

        /**
         * Decodes a ChannelBalanceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelBalanceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelBalanceRequest;

        /**
         * Verifies a ChannelBalanceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelBalanceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelBalanceRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelBalanceRequest;

        /**
         * Creates a plain object from a ChannelBalanceRequest message. Also converts values to other types if specified.
         * @param message ChannelBalanceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelBalanceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelBalanceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelBalanceResponse. */
    interface IChannelBalanceResponse {

        /** Sum of channels balances denominated in satoshis */
        balance?: (number|Long|null);

        /** Sum of channels pending balances denominated in satoshis */
        pendingOpenBalance?: (number|Long|null);
    }

    /** Represents a ChannelBalanceResponse. */
    class ChannelBalanceResponse implements IChannelBalanceResponse {

        /**
         * Constructs a new ChannelBalanceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelBalanceResponse);

        /** Sum of channels balances denominated in satoshis */
        public balance: (number|Long);

        /** Sum of channels pending balances denominated in satoshis */
        public pendingOpenBalance: (number|Long);

        /**
         * Creates a new ChannelBalanceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelBalanceResponse instance
         */
        public static create(properties?: lnrpc.IChannelBalanceResponse): lnrpc.ChannelBalanceResponse;

        /**
         * Encodes the specified ChannelBalanceResponse message. Does not implicitly {@link lnrpc.ChannelBalanceResponse.verify|verify} messages.
         * @param message ChannelBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelBalanceResponse message, length delimited. Does not implicitly {@link lnrpc.ChannelBalanceResponse.verify|verify} messages.
         * @param message ChannelBalanceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelBalanceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelBalanceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelBalanceResponse;

        /**
         * Decodes a ChannelBalanceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelBalanceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelBalanceResponse;

        /**
         * Verifies a ChannelBalanceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelBalanceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelBalanceResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelBalanceResponse;

        /**
         * Creates a plain object from a ChannelBalanceResponse message. Also converts values to other types if specified.
         * @param message ChannelBalanceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelBalanceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelBalanceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryRoutesRequest. */
    interface IQueryRoutesRequest {

        /** The 33-byte hex-encoded public key for the payment destination */
        pubKey?: (string|null);

        /** The amount to send expressed in satoshis */
        amt?: (number|Long|null);

        /** The max number of routes to return. */
        numRoutes?: (number|null);

        /** An optional CLTV delta from the current height that should be used for the timelock of the final hop */
        finalCltvDelta?: (number|null);

        /**
         * The maximum number of satoshis that will be paid as a fee of the payment.
         * This value can be represented either as a percentage of the amount being
         * sent, or as a fixed amount of the maximum fee the user is willing the pay to
         * send the payment.
         */
        feeLimit?: (lnrpc.IFeeLimit|null);
    }

    /** Represents a QueryRoutesRequest. */
    class QueryRoutesRequest implements IQueryRoutesRequest {

        /**
         * Constructs a new QueryRoutesRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IQueryRoutesRequest);

        /** The 33-byte hex-encoded public key for the payment destination */
        public pubKey: string;

        /** The amount to send expressed in satoshis */
        public amt: (number|Long);

        /** The max number of routes to return. */
        public numRoutes: number;

        /** An optional CLTV delta from the current height that should be used for the timelock of the final hop */
        public finalCltvDelta: number;

        /**
         * The maximum number of satoshis that will be paid as a fee of the payment.
         * This value can be represented either as a percentage of the amount being
         * sent, or as a fixed amount of the maximum fee the user is willing the pay to
         * send the payment.
         */
        public feeLimit?: (lnrpc.IFeeLimit|null);

        /**
         * Creates a new QueryRoutesRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRoutesRequest instance
         */
        public static create(properties?: lnrpc.IQueryRoutesRequest): lnrpc.QueryRoutesRequest;

        /**
         * Encodes the specified QueryRoutesRequest message. Does not implicitly {@link lnrpc.QueryRoutesRequest.verify|verify} messages.
         * @param message QueryRoutesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IQueryRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryRoutesRequest message, length delimited. Does not implicitly {@link lnrpc.QueryRoutesRequest.verify|verify} messages.
         * @param message QueryRoutesRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IQueryRoutesRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryRoutesRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRoutesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.QueryRoutesRequest;

        /**
         * Decodes a QueryRoutesRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRoutesRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.QueryRoutesRequest;

        /**
         * Verifies a QueryRoutesRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryRoutesRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryRoutesRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.QueryRoutesRequest;

        /**
         * Creates a plain object from a QueryRoutesRequest message. Also converts values to other types if specified.
         * @param message QueryRoutesRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.QueryRoutesRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryRoutesRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QueryRoutesResponse. */
    interface IQueryRoutesResponse {

        /** QueryRoutesResponse routes */
        routes?: (lnrpc.IRoute[]|null);
    }

    /** Represents a QueryRoutesResponse. */
    class QueryRoutesResponse implements IQueryRoutesResponse {

        /**
         * Constructs a new QueryRoutesResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IQueryRoutesResponse);

        /** QueryRoutesResponse routes. */
        public routes: lnrpc.IRoute[];

        /**
         * Creates a new QueryRoutesResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QueryRoutesResponse instance
         */
        public static create(properties?: lnrpc.IQueryRoutesResponse): lnrpc.QueryRoutesResponse;

        /**
         * Encodes the specified QueryRoutesResponse message. Does not implicitly {@link lnrpc.QueryRoutesResponse.verify|verify} messages.
         * @param message QueryRoutesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IQueryRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QueryRoutesResponse message, length delimited. Does not implicitly {@link lnrpc.QueryRoutesResponse.verify|verify} messages.
         * @param message QueryRoutesResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IQueryRoutesResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QueryRoutesResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QueryRoutesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.QueryRoutesResponse;

        /**
         * Decodes a QueryRoutesResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QueryRoutesResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.QueryRoutesResponse;

        /**
         * Verifies a QueryRoutesResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QueryRoutesResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QueryRoutesResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.QueryRoutesResponse;

        /**
         * Creates a plain object from a QueryRoutesResponse message. Also converts values to other types if specified.
         * @param message QueryRoutesResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.QueryRoutesResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QueryRoutesResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Hop. */
    interface IHop {

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        chanId?: (number|Long|null);

        /** Hop chanCapacity */
        chanCapacity?: (number|Long|null);

        /** Hop amtToForward */
        amtToForward?: (number|Long|null);

        /** Hop fee */
        fee?: (number|Long|null);

        /** Hop expiry */
        expiry?: (number|null);

        /** Hop amtToForwardMsat */
        amtToForwardMsat?: (number|Long|null);

        /** Hop feeMsat */
        feeMsat?: (number|Long|null);
    }

    /** Represents a Hop. */
    class Hop implements IHop {

        /**
         * Constructs a new Hop.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IHop);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public chanId: (number|Long);

        /** Hop chanCapacity. */
        public chanCapacity: (number|Long);

        /** Hop amtToForward. */
        public amtToForward: (number|Long);

        /** Hop fee. */
        public fee: (number|Long);

        /** Hop expiry. */
        public expiry: number;

        /** Hop amtToForwardMsat. */
        public amtToForwardMsat: (number|Long);

        /** Hop feeMsat. */
        public feeMsat: (number|Long);

        /**
         * Creates a new Hop instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Hop instance
         */
        public static create(properties?: lnrpc.IHop): lnrpc.Hop;

        /**
         * Encodes the specified Hop message. Does not implicitly {@link lnrpc.Hop.verify|verify} messages.
         * @param message Hop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IHop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Hop message, length delimited. Does not implicitly {@link lnrpc.Hop.verify|verify} messages.
         * @param message Hop message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IHop, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hop message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Hop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Hop;

        /**
         * Decodes a Hop message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Hop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Hop;

        /**
         * Verifies a Hop message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Hop message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Hop
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Hop;

        /**
         * Creates a plain object from a Hop message. Also converts values to other types if specified.
         * @param message Hop
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Hop, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Hop to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Route. */
    interface IRoute {

        /**
         * The cumulative (final) time lock across the entire route.  This is the CLTV
         * value that should be extended to the first hop in the route. All other hops
         * will decrement the time-lock as advertised, leaving enough time for all
         * hops to wait for or present the payment preimage to complete the payment.
         */
        totalTimeLock?: (number|null);

        /**
         * The sum of the fees paid at each hop within the final route.  In the case
         * of a one-hop payment, this value will be zero as we don't need to pay a fee
         * it ourself.
         */
        totalFees?: (number|Long|null);

        /**
         * The total amount of funds required to complete a payment over this route.
         * This value includes the cumulative fees at each hop. As a result, the HTLC
         * extended to the first-hop in the route will need to have at least this many
         * satoshis, otherwise the route will fail at an intermediate node due to an
         * insufficient amount of fees.
         */
        totalAmt?: (number|Long|null);

        /** Contains details concerning the specific forwarding details at each hop. */
        hops?: (lnrpc.IHop[]|null);

        /** The total fees in millisatoshis. */
        totalFeesMsat?: (number|Long|null);

        /** The total amount in millisatoshis. */
        totalAmtMsat?: (number|Long|null);
    }

    /**
     * A path through the channel graph which runs over one or more channels in
     * succession. This struct carries all the information required to craft the
     * Sphinx onion packet, and send the payment along the first hop in the path. A
     * route is only selected as valid if all the channels have sufficient capacity to
     * carry the initial payment amount after fees are accounted for.
     */
    class Route implements IRoute {

        /**
         * Constructs a new Route.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IRoute);

        /**
         * The cumulative (final) time lock across the entire route.  This is the CLTV
         * value that should be extended to the first hop in the route. All other hops
         * will decrement the time-lock as advertised, leaving enough time for all
         * hops to wait for or present the payment preimage to complete the payment.
         */
        public totalTimeLock: number;

        /**
         * The sum of the fees paid at each hop within the final route.  In the case
         * of a one-hop payment, this value will be zero as we don't need to pay a fee
         * it ourself.
         */
        public totalFees: (number|Long);

        /**
         * The total amount of funds required to complete a payment over this route.
         * This value includes the cumulative fees at each hop. As a result, the HTLC
         * extended to the first-hop in the route will need to have at least this many
         * satoshis, otherwise the route will fail at an intermediate node due to an
         * insufficient amount of fees.
         */
        public totalAmt: (number|Long);

        /** Contains details concerning the specific forwarding details at each hop. */
        public hops: lnrpc.IHop[];

        /** The total fees in millisatoshis. */
        public totalFeesMsat: (number|Long);

        /** The total amount in millisatoshis. */
        public totalAmtMsat: (number|Long);

        /**
         * Creates a new Route instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Route instance
         */
        public static create(properties?: lnrpc.IRoute): lnrpc.Route;

        /**
         * Encodes the specified Route message. Does not implicitly {@link lnrpc.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Route message, length delimited. Does not implicitly {@link lnrpc.Route.verify|verify} messages.
         * @param message Route message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IRoute, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Route message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Route;

        /**
         * Decodes a Route message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Route
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Route;

        /**
         * Verifies a Route message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Route message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Route
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Route;

        /**
         * Creates a plain object from a Route message. Also converts values to other types if specified.
         * @param message Route
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Route, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Route to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeInfoRequest. */
    interface INodeInfoRequest {

        /** The 33-byte hex-encoded compressed public of the target node */
        pubKey?: (string|null);
    }

    /** Represents a NodeInfoRequest. */
    class NodeInfoRequest implements INodeInfoRequest {

        /**
         * Constructs a new NodeInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INodeInfoRequest);

        /** The 33-byte hex-encoded compressed public of the target node */
        public pubKey: string;

        /**
         * Creates a new NodeInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeInfoRequest instance
         */
        public static create(properties?: lnrpc.INodeInfoRequest): lnrpc.NodeInfoRequest;

        /**
         * Encodes the specified NodeInfoRequest message. Does not implicitly {@link lnrpc.NodeInfoRequest.verify|verify} messages.
         * @param message NodeInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INodeInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeInfoRequest message, length delimited. Does not implicitly {@link lnrpc.NodeInfoRequest.verify|verify} messages.
         * @param message NodeInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INodeInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NodeInfoRequest;

        /**
         * Decodes a NodeInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NodeInfoRequest;

        /**
         * Verifies a NodeInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NodeInfoRequest;

        /**
         * Creates a plain object from a NodeInfoRequest message. Also converts values to other types if specified.
         * @param message NodeInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NodeInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeInfo. */
    interface INodeInfo {

        /**
         * An individual vertex/node within the channel graph. A node is
         * connected to other nodes by one or more channel edges emanating from it. As
         * the graph is directed, a node will also have an incoming edge attached to
         * it for each outgoing edge.
         */
        node?: (lnrpc.ILightningNode|null);

        /** NodeInfo numChannels */
        numChannels?: (number|null);

        /** NodeInfo totalCapacity */
        totalCapacity?: (number|Long|null);
    }

    /** Represents a NodeInfo. */
    class NodeInfo implements INodeInfo {

        /**
         * Constructs a new NodeInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INodeInfo);

        /**
         * An individual vertex/node within the channel graph. A node is
         * connected to other nodes by one or more channel edges emanating from it. As
         * the graph is directed, a node will also have an incoming edge attached to
         * it for each outgoing edge.
         */
        public node?: (lnrpc.ILightningNode|null);

        /** NodeInfo numChannels. */
        public numChannels: number;

        /** NodeInfo totalCapacity. */
        public totalCapacity: (number|Long);

        /**
         * Creates a new NodeInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeInfo instance
         */
        public static create(properties?: lnrpc.INodeInfo): lnrpc.NodeInfo;

        /**
         * Encodes the specified NodeInfo message. Does not implicitly {@link lnrpc.NodeInfo.verify|verify} messages.
         * @param message NodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeInfo message, length delimited. Does not implicitly {@link lnrpc.NodeInfo.verify|verify} messages.
         * @param message NodeInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NodeInfo;

        /**
         * Decodes a NodeInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NodeInfo;

        /**
         * Verifies a NodeInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeInfo
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NodeInfo;

        /**
         * Creates a plain object from a NodeInfo message. Also converts values to other types if specified.
         * @param message NodeInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a LightningNode. */
    interface ILightningNode {

        /** LightningNode lastUpdate */
        lastUpdate?: (number|null);

        /** LightningNode pubKey */
        pubKey?: (string|null);

        /** LightningNode alias */
        alias?: (string|null);

        /** LightningNode addresses */
        addresses?: (lnrpc.INodeAddress[]|null);

        /** LightningNode color */
        color?: (string|null);
    }

    /**
     * An individual vertex/node within the channel graph. A node is
     * connected to other nodes by one or more channel edges emanating from it. As the
     * graph is directed, a node will also have an incoming edge attached to it for
     * each outgoing edge.
     */
    class LightningNode implements ILightningNode {

        /**
         * Constructs a new LightningNode.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.ILightningNode);

        /** LightningNode lastUpdate. */
        public lastUpdate: number;

        /** LightningNode pubKey. */
        public pubKey: string;

        /** LightningNode alias. */
        public alias: string;

        /** LightningNode addresses. */
        public addresses: lnrpc.INodeAddress[];

        /** LightningNode color. */
        public color: string;

        /**
         * Creates a new LightningNode instance using the specified properties.
         * @param [properties] Properties to set
         * @returns LightningNode instance
         */
        public static create(properties?: lnrpc.ILightningNode): lnrpc.LightningNode;

        /**
         * Encodes the specified LightningNode message. Does not implicitly {@link lnrpc.LightningNode.verify|verify} messages.
         * @param message LightningNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.ILightningNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified LightningNode message, length delimited. Does not implicitly {@link lnrpc.LightningNode.verify|verify} messages.
         * @param message LightningNode message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.ILightningNode, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a LightningNode message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns LightningNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.LightningNode;

        /**
         * Decodes a LightningNode message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns LightningNode
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.LightningNode;

        /**
         * Verifies a LightningNode message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a LightningNode message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns LightningNode
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.LightningNode;

        /**
         * Creates a plain object from a LightningNode message. Also converts values to other types if specified.
         * @param message LightningNode
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.LightningNode, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this LightningNode to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeAddress. */
    interface INodeAddress {

        /** NodeAddress network */
        network?: (string|null);

        /** NodeAddress addr */
        addr?: (string|null);
    }

    /** Represents a NodeAddress. */
    class NodeAddress implements INodeAddress {

        /**
         * Constructs a new NodeAddress.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INodeAddress);

        /** NodeAddress network. */
        public network: string;

        /** NodeAddress addr. */
        public addr: string;

        /**
         * Creates a new NodeAddress instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeAddress instance
         */
        public static create(properties?: lnrpc.INodeAddress): lnrpc.NodeAddress;

        /**
         * Encodes the specified NodeAddress message. Does not implicitly {@link lnrpc.NodeAddress.verify|verify} messages.
         * @param message NodeAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INodeAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeAddress message, length delimited. Does not implicitly {@link lnrpc.NodeAddress.verify|verify} messages.
         * @param message NodeAddress message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INodeAddress, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeAddress message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NodeAddress;

        /**
         * Decodes a NodeAddress message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeAddress
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NodeAddress;

        /**
         * Verifies a NodeAddress message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeAddress message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeAddress
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NodeAddress;

        /**
         * Creates a plain object from a NodeAddress message. Also converts values to other types if specified.
         * @param message NodeAddress
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NodeAddress, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeAddress to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RoutingPolicy. */
    interface IRoutingPolicy {

        /** RoutingPolicy timeLockDelta */
        timeLockDelta?: (number|null);

        /** RoutingPolicy minHtlc */
        minHtlc?: (number|Long|null);

        /** RoutingPolicy feeBaseMsat */
        feeBaseMsat?: (number|Long|null);

        /** RoutingPolicy feeRateMilliMsat */
        feeRateMilliMsat?: (number|Long|null);
    }

    /** Represents a RoutingPolicy. */
    class RoutingPolicy implements IRoutingPolicy {

        /**
         * Constructs a new RoutingPolicy.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IRoutingPolicy);

        /** RoutingPolicy timeLockDelta. */
        public timeLockDelta: number;

        /** RoutingPolicy minHtlc. */
        public minHtlc: (number|Long);

        /** RoutingPolicy feeBaseMsat. */
        public feeBaseMsat: (number|Long);

        /** RoutingPolicy feeRateMilliMsat. */
        public feeRateMilliMsat: (number|Long);

        /**
         * Creates a new RoutingPolicy instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RoutingPolicy instance
         */
        public static create(properties?: lnrpc.IRoutingPolicy): lnrpc.RoutingPolicy;

        /**
         * Encodes the specified RoutingPolicy message. Does not implicitly {@link lnrpc.RoutingPolicy.verify|verify} messages.
         * @param message RoutingPolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IRoutingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RoutingPolicy message, length delimited. Does not implicitly {@link lnrpc.RoutingPolicy.verify|verify} messages.
         * @param message RoutingPolicy message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IRoutingPolicy, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoutingPolicy message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RoutingPolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.RoutingPolicy;

        /**
         * Decodes a RoutingPolicy message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RoutingPolicy
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.RoutingPolicy;

        /**
         * Verifies a RoutingPolicy message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RoutingPolicy message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RoutingPolicy
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.RoutingPolicy;

        /**
         * Creates a plain object from a RoutingPolicy message. Also converts values to other types if specified.
         * @param message RoutingPolicy
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.RoutingPolicy, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RoutingPolicy to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelEdge. */
    interface IChannelEdge {

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        channelId?: (number|Long|null);

        /** ChannelEdge chanPoint */
        chanPoint?: (string|null);

        /** ChannelEdge lastUpdate */
        lastUpdate?: (number|null);

        /** ChannelEdge node1Pub */
        node1Pub?: (string|null);

        /** ChannelEdge node2Pub */
        node2Pub?: (string|null);

        /** ChannelEdge capacity */
        capacity?: (number|Long|null);

        /** ChannelEdge node1Policy */
        node1Policy?: (lnrpc.IRoutingPolicy|null);

        /** ChannelEdge node2Policy */
        node2Policy?: (lnrpc.IRoutingPolicy|null);
    }

    /**
     * A fully authenticated channel along with all its unique attributes.
     * Once an authenticated channel announcement has been processed on the network,
     * then an instance of ChannelEdgeInfo encapsulating the channels attributes is
     * stored. The other portions relevant to routing policy of a channel are stored
     * within a ChannelEdgePolicy for each direction of the channel.
     */
    class ChannelEdge implements IChannelEdge {

        /**
         * Constructs a new ChannelEdge.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelEdge);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public channelId: (number|Long);

        /** ChannelEdge chanPoint. */
        public chanPoint: string;

        /** ChannelEdge lastUpdate. */
        public lastUpdate: number;

        /** ChannelEdge node1Pub. */
        public node1Pub: string;

        /** ChannelEdge node2Pub. */
        public node2Pub: string;

        /** ChannelEdge capacity. */
        public capacity: (number|Long);

        /** ChannelEdge node1Policy. */
        public node1Policy?: (lnrpc.IRoutingPolicy|null);

        /** ChannelEdge node2Policy. */
        public node2Policy?: (lnrpc.IRoutingPolicy|null);

        /**
         * Creates a new ChannelEdge instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelEdge instance
         */
        public static create(properties?: lnrpc.IChannelEdge): lnrpc.ChannelEdge;

        /**
         * Encodes the specified ChannelEdge message. Does not implicitly {@link lnrpc.ChannelEdge.verify|verify} messages.
         * @param message ChannelEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelEdge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelEdge message, length delimited. Does not implicitly {@link lnrpc.ChannelEdge.verify|verify} messages.
         * @param message ChannelEdge message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelEdge, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelEdge message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelEdge;

        /**
         * Decodes a ChannelEdge message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelEdge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelEdge;

        /**
         * Verifies a ChannelEdge message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelEdge message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelEdge
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelEdge;

        /**
         * Creates a plain object from a ChannelEdge message. Also converts values to other types if specified.
         * @param message ChannelEdge
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelEdge, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelEdge to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelGraphRequest. */
    interface IChannelGraphRequest {
    }

    /** Represents a ChannelGraphRequest. */
    class ChannelGraphRequest implements IChannelGraphRequest {

        /**
         * Constructs a new ChannelGraphRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelGraphRequest);

        /**
         * Creates a new ChannelGraphRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelGraphRequest instance
         */
        public static create(properties?: lnrpc.IChannelGraphRequest): lnrpc.ChannelGraphRequest;

        /**
         * Encodes the specified ChannelGraphRequest message. Does not implicitly {@link lnrpc.ChannelGraphRequest.verify|verify} messages.
         * @param message ChannelGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelGraphRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelGraphRequest message, length delimited. Does not implicitly {@link lnrpc.ChannelGraphRequest.verify|verify} messages.
         * @param message ChannelGraphRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelGraphRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelGraphRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelGraphRequest;

        /**
         * Decodes a ChannelGraphRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelGraphRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelGraphRequest;

        /**
         * Verifies a ChannelGraphRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelGraphRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelGraphRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelGraphRequest;

        /**
         * Creates a plain object from a ChannelGraphRequest message. Also converts values to other types if specified.
         * @param message ChannelGraphRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelGraphRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelGraphRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelGraph. */
    interface IChannelGraph {

        /** The list of `LightningNode`s in this channel graph */
        nodes?: (lnrpc.ILightningNode[]|null);

        /** The list of `ChannelEdge`s in this channel graph */
        edges?: (lnrpc.IChannelEdge[]|null);
    }

    /** Returns a new instance of the directed channel graph. */
    class ChannelGraph implements IChannelGraph {

        /**
         * Constructs a new ChannelGraph.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelGraph);

        /** The list of `LightningNode`s in this channel graph */
        public nodes: lnrpc.ILightningNode[];

        /** The list of `ChannelEdge`s in this channel graph */
        public edges: lnrpc.IChannelEdge[];

        /**
         * Creates a new ChannelGraph instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelGraph instance
         */
        public static create(properties?: lnrpc.IChannelGraph): lnrpc.ChannelGraph;

        /**
         * Encodes the specified ChannelGraph message. Does not implicitly {@link lnrpc.ChannelGraph.verify|verify} messages.
         * @param message ChannelGraph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelGraph message, length delimited. Does not implicitly {@link lnrpc.ChannelGraph.verify|verify} messages.
         * @param message ChannelGraph message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelGraph, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelGraph message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelGraph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelGraph;

        /**
         * Decodes a ChannelGraph message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelGraph
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelGraph;

        /**
         * Verifies a ChannelGraph message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelGraph message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelGraph
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelGraph;

        /**
         * Creates a plain object from a ChannelGraph message. Also converts values to other types if specified.
         * @param message ChannelGraph
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelGraph, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelGraph to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChanInfoRequest. */
    interface IChanInfoRequest {

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        chanId?: (number|Long|null);
    }

    /** Represents a ChanInfoRequest. */
    class ChanInfoRequest implements IChanInfoRequest {

        /**
         * Constructs a new ChanInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChanInfoRequest);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public chanId: (number|Long);

        /**
         * Creates a new ChanInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChanInfoRequest instance
         */
        public static create(properties?: lnrpc.IChanInfoRequest): lnrpc.ChanInfoRequest;

        /**
         * Encodes the specified ChanInfoRequest message. Does not implicitly {@link lnrpc.ChanInfoRequest.verify|verify} messages.
         * @param message ChanInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChanInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChanInfoRequest message, length delimited. Does not implicitly {@link lnrpc.ChanInfoRequest.verify|verify} messages.
         * @param message ChanInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChanInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChanInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChanInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChanInfoRequest;

        /**
         * Decodes a ChanInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChanInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChanInfoRequest;

        /**
         * Verifies a ChanInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChanInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChanInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChanInfoRequest;

        /**
         * Creates a plain object from a ChanInfoRequest message. Also converts values to other types if specified.
         * @param message ChanInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChanInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChanInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NetworkInfoRequest. */
    interface INetworkInfoRequest {
    }

    /** Represents a NetworkInfoRequest. */
    class NetworkInfoRequest implements INetworkInfoRequest {

        /**
         * Constructs a new NetworkInfoRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INetworkInfoRequest);

        /**
         * Creates a new NetworkInfoRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkInfoRequest instance
         */
        public static create(properties?: lnrpc.INetworkInfoRequest): lnrpc.NetworkInfoRequest;

        /**
         * Encodes the specified NetworkInfoRequest message. Does not implicitly {@link lnrpc.NetworkInfoRequest.verify|verify} messages.
         * @param message NetworkInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INetworkInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetworkInfoRequest message, length delimited. Does not implicitly {@link lnrpc.NetworkInfoRequest.verify|verify} messages.
         * @param message NetworkInfoRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INetworkInfoRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkInfoRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NetworkInfoRequest;

        /**
         * Decodes a NetworkInfoRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetworkInfoRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NetworkInfoRequest;

        /**
         * Verifies a NetworkInfoRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetworkInfoRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetworkInfoRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NetworkInfoRequest;

        /**
         * Creates a plain object from a NetworkInfoRequest message. Also converts values to other types if specified.
         * @param message NetworkInfoRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NetworkInfoRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetworkInfoRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NetworkInfo. */
    interface INetworkInfo {

        /** NetworkInfo graphDiameter */
        graphDiameter?: (number|null);

        /** NetworkInfo avgOutDegree */
        avgOutDegree?: (number|null);

        /** NetworkInfo maxOutDegree */
        maxOutDegree?: (number|null);

        /** NetworkInfo numNodes */
        numNodes?: (number|null);

        /** NetworkInfo numChannels */
        numChannels?: (number|null);

        /** NetworkInfo totalNetworkCapacity */
        totalNetworkCapacity?: (number|Long|null);

        /** NetworkInfo avgChannelSize */
        avgChannelSize?: (number|null);

        /** NetworkInfo minChannelSize */
        minChannelSize?: (number|Long|null);

        /** NetworkInfo maxChannelSize */
        maxChannelSize?: (number|Long|null);
    }

    /** Represents a NetworkInfo. */
    class NetworkInfo implements INetworkInfo {

        /**
         * Constructs a new NetworkInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INetworkInfo);

        /** NetworkInfo graphDiameter. */
        public graphDiameter: number;

        /** NetworkInfo avgOutDegree. */
        public avgOutDegree: number;

        /** NetworkInfo maxOutDegree. */
        public maxOutDegree: number;

        /** NetworkInfo numNodes. */
        public numNodes: number;

        /** NetworkInfo numChannels. */
        public numChannels: number;

        /** NetworkInfo totalNetworkCapacity. */
        public totalNetworkCapacity: (number|Long);

        /** NetworkInfo avgChannelSize. */
        public avgChannelSize: number;

        /** NetworkInfo minChannelSize. */
        public minChannelSize: (number|Long);

        /** NetworkInfo maxChannelSize. */
        public maxChannelSize: (number|Long);

        /**
         * Creates a new NetworkInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NetworkInfo instance
         */
        public static create(properties?: lnrpc.INetworkInfo): lnrpc.NetworkInfo;

        /**
         * Encodes the specified NetworkInfo message. Does not implicitly {@link lnrpc.NetworkInfo.verify|verify} messages.
         * @param message NetworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NetworkInfo message, length delimited. Does not implicitly {@link lnrpc.NetworkInfo.verify|verify} messages.
         * @param message NetworkInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INetworkInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NetworkInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NetworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NetworkInfo;

        /**
         * Decodes a NetworkInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NetworkInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NetworkInfo;

        /**
         * Verifies a NetworkInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NetworkInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NetworkInfo
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NetworkInfo;

        /**
         * Creates a plain object from a NetworkInfo message. Also converts values to other types if specified.
         * @param message NetworkInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NetworkInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NetworkInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopRequest. */
    interface IStopRequest {
    }

    /** Represents a StopRequest. */
    class StopRequest implements IStopRequest {

        /**
         * Constructs a new StopRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IStopRequest);

        /**
         * Creates a new StopRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopRequest instance
         */
        public static create(properties?: lnrpc.IStopRequest): lnrpc.StopRequest;

        /**
         * Encodes the specified StopRequest message. Does not implicitly {@link lnrpc.StopRequest.verify|verify} messages.
         * @param message StopRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IStopRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopRequest message, length delimited. Does not implicitly {@link lnrpc.StopRequest.verify|verify} messages.
         * @param message StopRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IStopRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.StopRequest;

        /**
         * Decodes a StopRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.StopRequest;

        /**
         * Verifies a StopRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.StopRequest;

        /**
         * Creates a plain object from a StopRequest message. Also converts values to other types if specified.
         * @param message StopRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.StopRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StopResponse. */
    interface IStopResponse {
    }

    /** Represents a StopResponse. */
    class StopResponse implements IStopResponse {

        /**
         * Constructs a new StopResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IStopResponse);

        /**
         * Creates a new StopResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StopResponse instance
         */
        public static create(properties?: lnrpc.IStopResponse): lnrpc.StopResponse;

        /**
         * Encodes the specified StopResponse message. Does not implicitly {@link lnrpc.StopResponse.verify|verify} messages.
         * @param message StopResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IStopResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StopResponse message, length delimited. Does not implicitly {@link lnrpc.StopResponse.verify|verify} messages.
         * @param message StopResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IStopResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StopResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StopResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.StopResponse;

        /**
         * Decodes a StopResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StopResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.StopResponse;

        /**
         * Verifies a StopResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StopResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StopResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.StopResponse;

        /**
         * Creates a plain object from a StopResponse message. Also converts values to other types if specified.
         * @param message StopResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.StopResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StopResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GraphTopologySubscription. */
    interface IGraphTopologySubscription {
    }

    /** Represents a GraphTopologySubscription. */
    class GraphTopologySubscription implements IGraphTopologySubscription {

        /**
         * Constructs a new GraphTopologySubscription.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGraphTopologySubscription);

        /**
         * Creates a new GraphTopologySubscription instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GraphTopologySubscription instance
         */
        public static create(properties?: lnrpc.IGraphTopologySubscription): lnrpc.GraphTopologySubscription;

        /**
         * Encodes the specified GraphTopologySubscription message. Does not implicitly {@link lnrpc.GraphTopologySubscription.verify|verify} messages.
         * @param message GraphTopologySubscription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGraphTopologySubscription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GraphTopologySubscription message, length delimited. Does not implicitly {@link lnrpc.GraphTopologySubscription.verify|verify} messages.
         * @param message GraphTopologySubscription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGraphTopologySubscription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GraphTopologySubscription message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GraphTopologySubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GraphTopologySubscription;

        /**
         * Decodes a GraphTopologySubscription message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GraphTopologySubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GraphTopologySubscription;

        /**
         * Verifies a GraphTopologySubscription message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GraphTopologySubscription message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GraphTopologySubscription
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GraphTopologySubscription;

        /**
         * Creates a plain object from a GraphTopologySubscription message. Also converts values to other types if specified.
         * @param message GraphTopologySubscription
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GraphTopologySubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GraphTopologySubscription to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a GraphTopologyUpdate. */
    interface IGraphTopologyUpdate {

        /** GraphTopologyUpdate nodeUpdates */
        nodeUpdates?: (lnrpc.INodeUpdate[]|null);

        /** GraphTopologyUpdate channelUpdates */
        channelUpdates?: (lnrpc.IChannelEdgeUpdate[]|null);

        /** GraphTopologyUpdate closedChans */
        closedChans?: (lnrpc.IClosedChannelUpdate[]|null);
    }

    /** Represents a GraphTopologyUpdate. */
    class GraphTopologyUpdate implements IGraphTopologyUpdate {

        /**
         * Constructs a new GraphTopologyUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IGraphTopologyUpdate);

        /** GraphTopologyUpdate nodeUpdates. */
        public nodeUpdates: lnrpc.INodeUpdate[];

        /** GraphTopologyUpdate channelUpdates. */
        public channelUpdates: lnrpc.IChannelEdgeUpdate[];

        /** GraphTopologyUpdate closedChans. */
        public closedChans: lnrpc.IClosedChannelUpdate[];

        /**
         * Creates a new GraphTopologyUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns GraphTopologyUpdate instance
         */
        public static create(properties?: lnrpc.IGraphTopologyUpdate): lnrpc.GraphTopologyUpdate;

        /**
         * Encodes the specified GraphTopologyUpdate message. Does not implicitly {@link lnrpc.GraphTopologyUpdate.verify|verify} messages.
         * @param message GraphTopologyUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IGraphTopologyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified GraphTopologyUpdate message, length delimited. Does not implicitly {@link lnrpc.GraphTopologyUpdate.verify|verify} messages.
         * @param message GraphTopologyUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IGraphTopologyUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GraphTopologyUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns GraphTopologyUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.GraphTopologyUpdate;

        /**
         * Decodes a GraphTopologyUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns GraphTopologyUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.GraphTopologyUpdate;

        /**
         * Verifies a GraphTopologyUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a GraphTopologyUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns GraphTopologyUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.GraphTopologyUpdate;

        /**
         * Creates a plain object from a GraphTopologyUpdate message. Also converts values to other types if specified.
         * @param message GraphTopologyUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.GraphTopologyUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this GraphTopologyUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a NodeUpdate. */
    interface INodeUpdate {

        /** NodeUpdate addresses */
        addresses?: (string[]|null);

        /** NodeUpdate identityKey */
        identityKey?: (string|null);

        /** NodeUpdate globalFeatures */
        globalFeatures?: (Uint8Array|null);

        /** NodeUpdate alias */
        alias?: (string|null);
    }

    /** Represents a NodeUpdate. */
    class NodeUpdate implements INodeUpdate {

        /**
         * Constructs a new NodeUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.INodeUpdate);

        /** NodeUpdate addresses. */
        public addresses: string[];

        /** NodeUpdate identityKey. */
        public identityKey: string;

        /** NodeUpdate globalFeatures. */
        public globalFeatures: Uint8Array;

        /** NodeUpdate alias. */
        public alias: string;

        /**
         * Creates a new NodeUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns NodeUpdate instance
         */
        public static create(properties?: lnrpc.INodeUpdate): lnrpc.NodeUpdate;

        /**
         * Encodes the specified NodeUpdate message. Does not implicitly {@link lnrpc.NodeUpdate.verify|verify} messages.
         * @param message NodeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.INodeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified NodeUpdate message, length delimited. Does not implicitly {@link lnrpc.NodeUpdate.verify|verify} messages.
         * @param message NodeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.INodeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NodeUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns NodeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.NodeUpdate;

        /**
         * Decodes a NodeUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns NodeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.NodeUpdate;

        /**
         * Verifies a NodeUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a NodeUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns NodeUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.NodeUpdate;

        /**
         * Creates a plain object from a NodeUpdate message. Also converts values to other types if specified.
         * @param message NodeUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.NodeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this NodeUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelEdgeUpdate. */
    interface IChannelEdgeUpdate {

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        chanId?: (number|Long|null);

        /** ChannelEdgeUpdate chanPoint */
        chanPoint?: (lnrpc.IChannelPoint|null);

        /** ChannelEdgeUpdate capacity */
        capacity?: (number|Long|null);

        /** ChannelEdgeUpdate routingPolicy */
        routingPolicy?: (lnrpc.IRoutingPolicy|null);

        /** ChannelEdgeUpdate advertisingNode */
        advertisingNode?: (string|null);

        /** ChannelEdgeUpdate connectingNode */
        connectingNode?: (string|null);
    }

    /** Represents a ChannelEdgeUpdate. */
    class ChannelEdgeUpdate implements IChannelEdgeUpdate {

        /**
         * Constructs a new ChannelEdgeUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelEdgeUpdate);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public chanId: (number|Long);

        /** ChannelEdgeUpdate chanPoint. */
        public chanPoint?: (lnrpc.IChannelPoint|null);

        /** ChannelEdgeUpdate capacity. */
        public capacity: (number|Long);

        /** ChannelEdgeUpdate routingPolicy. */
        public routingPolicy?: (lnrpc.IRoutingPolicy|null);

        /** ChannelEdgeUpdate advertisingNode. */
        public advertisingNode: string;

        /** ChannelEdgeUpdate connectingNode. */
        public connectingNode: string;

        /**
         * Creates a new ChannelEdgeUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelEdgeUpdate instance
         */
        public static create(properties?: lnrpc.IChannelEdgeUpdate): lnrpc.ChannelEdgeUpdate;

        /**
         * Encodes the specified ChannelEdgeUpdate message. Does not implicitly {@link lnrpc.ChannelEdgeUpdate.verify|verify} messages.
         * @param message ChannelEdgeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelEdgeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelEdgeUpdate message, length delimited. Does not implicitly {@link lnrpc.ChannelEdgeUpdate.verify|verify} messages.
         * @param message ChannelEdgeUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelEdgeUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelEdgeUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelEdgeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelEdgeUpdate;

        /**
         * Decodes a ChannelEdgeUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelEdgeUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelEdgeUpdate;

        /**
         * Verifies a ChannelEdgeUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelEdgeUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelEdgeUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelEdgeUpdate;

        /**
         * Creates a plain object from a ChannelEdgeUpdate message. Also converts values to other types if specified.
         * @param message ChannelEdgeUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelEdgeUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelEdgeUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ClosedChannelUpdate. */
    interface IClosedChannelUpdate {

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        chanId?: (number|Long|null);

        /** ClosedChannelUpdate capacity */
        capacity?: (number|Long|null);

        /** ClosedChannelUpdate closedHeight */
        closedHeight?: (number|null);

        /** ClosedChannelUpdate chanPoint */
        chanPoint?: (lnrpc.IChannelPoint|null);
    }

    /** Represents a ClosedChannelUpdate. */
    class ClosedChannelUpdate implements IClosedChannelUpdate {

        /**
         * Constructs a new ClosedChannelUpdate.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IClosedChannelUpdate);

        /**
         * The unique channel ID for the channel. The first 3 bytes are the block
         * height, the next 3 the index within the block, and the last 2 bytes are the
         * output index for the channel.
         */
        public chanId: (number|Long);

        /** ClosedChannelUpdate capacity. */
        public capacity: (number|Long);

        /** ClosedChannelUpdate closedHeight. */
        public closedHeight: number;

        /** ClosedChannelUpdate chanPoint. */
        public chanPoint?: (lnrpc.IChannelPoint|null);

        /**
         * Creates a new ClosedChannelUpdate instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ClosedChannelUpdate instance
         */
        public static create(properties?: lnrpc.IClosedChannelUpdate): lnrpc.ClosedChannelUpdate;

        /**
         * Encodes the specified ClosedChannelUpdate message. Does not implicitly {@link lnrpc.ClosedChannelUpdate.verify|verify} messages.
         * @param message ClosedChannelUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IClosedChannelUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ClosedChannelUpdate message, length delimited. Does not implicitly {@link lnrpc.ClosedChannelUpdate.verify|verify} messages.
         * @param message ClosedChannelUpdate message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IClosedChannelUpdate, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ClosedChannelUpdate message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ClosedChannelUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ClosedChannelUpdate;

        /**
         * Decodes a ClosedChannelUpdate message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ClosedChannelUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ClosedChannelUpdate;

        /**
         * Verifies a ClosedChannelUpdate message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ClosedChannelUpdate message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ClosedChannelUpdate
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ClosedChannelUpdate;

        /**
         * Creates a plain object from a ClosedChannelUpdate message. Also converts values to other types if specified.
         * @param message ClosedChannelUpdate
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ClosedChannelUpdate, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ClosedChannelUpdate to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a HopHint. */
    interface IHopHint {

        /** The public key of the node at the start of the channel. */
        nodeId?: (string|null);

        /** The unique identifier of the channel. */
        chanId?: (number|Long|null);

        /** The base fee of the channel denominated in millisatoshis. */
        feeBaseMsat?: (number|null);

        /**
         * The fee rate of the channel for sending one satoshi across it denominated in
         * millionths of a satoshi.
         */
        feeProportionalMillionths?: (number|null);

        /** The time-lock delta of the channel. */
        cltvExpiryDelta?: (number|null);
    }

    /** Represents a HopHint. */
    class HopHint implements IHopHint {

        /**
         * Constructs a new HopHint.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IHopHint);

        /** The public key of the node at the start of the channel. */
        public nodeId: string;

        /** The unique identifier of the channel. */
        public chanId: (number|Long);

        /** The base fee of the channel denominated in millisatoshis. */
        public feeBaseMsat: number;

        /**
         * The fee rate of the channel for sending one satoshi across it denominated in
         * millionths of a satoshi.
         */
        public feeProportionalMillionths: number;

        /** The time-lock delta of the channel. */
        public cltvExpiryDelta: number;

        /**
         * Creates a new HopHint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns HopHint instance
         */
        public static create(properties?: lnrpc.IHopHint): lnrpc.HopHint;

        /**
         * Encodes the specified HopHint message. Does not implicitly {@link lnrpc.HopHint.verify|verify} messages.
         * @param message HopHint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IHopHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified HopHint message, length delimited. Does not implicitly {@link lnrpc.HopHint.verify|verify} messages.
         * @param message HopHint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IHopHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HopHint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns HopHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.HopHint;

        /**
         * Decodes a HopHint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns HopHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.HopHint;

        /**
         * Verifies a HopHint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a HopHint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns HopHint
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.HopHint;

        /**
         * Creates a plain object from a HopHint message. Also converts values to other types if specified.
         * @param message HopHint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.HopHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this HopHint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RouteHint. */
    interface IRouteHint {

        /**
         * A list of hop hints that when chained together can assist in reaching a
         * specific destination.
         */
        hopHints?: (lnrpc.IHopHint[]|null);
    }

    /** Represents a RouteHint. */
    class RouteHint implements IRouteHint {

        /**
         * Constructs a new RouteHint.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IRouteHint);

        /**
         * A list of hop hints that when chained together can assist in reaching a
         * specific destination.
         */
        public hopHints: lnrpc.IHopHint[];

        /**
         * Creates a new RouteHint instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RouteHint instance
         */
        public static create(properties?: lnrpc.IRouteHint): lnrpc.RouteHint;

        /**
         * Encodes the specified RouteHint message. Does not implicitly {@link lnrpc.RouteHint.verify|verify} messages.
         * @param message RouteHint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IRouteHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RouteHint message, length delimited. Does not implicitly {@link lnrpc.RouteHint.verify|verify} messages.
         * @param message RouteHint message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IRouteHint, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RouteHint message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RouteHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.RouteHint;

        /**
         * Decodes a RouteHint message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RouteHint
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.RouteHint;

        /**
         * Verifies a RouteHint message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RouteHint message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RouteHint
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.RouteHint;

        /**
         * Creates a plain object from a RouteHint message. Also converts values to other types if specified.
         * @param message RouteHint
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.RouteHint, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RouteHint to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Invoice. */
    interface IInvoice {

        /**
         * An optional memo to attach along with the invoice. Used for record keeping
         * purposes for the invoice's creator, and will also be set in the description
         * field of the encoded payment request if the description_hash field is not
         * being used.
         */
        memo?: (string|null);

        /** An optional cryptographic receipt of payment */
        receipt?: (Uint8Array|null);

        /**
         * The hex-encoded preimage (32 byte) which will allow settling an incoming
         * HTLC payable to this preimage
         */
        rPreimage?: (Uint8Array|null);

        /** The hash of the preimage */
        rHash?: (Uint8Array|null);

        /** The value of this invoice in satoshis */
        value?: (number|Long|null);

        /** Whether this invoice has been fulfilled */
        settled?: (boolean|null);

        /** When this invoice was created */
        creationDate?: (number|Long|null);

        /** When this invoice was settled */
        settleDate?: (number|Long|null);

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        paymentRequest?: (string|null);

        /**
         * Hash (SHA-256) of a description of the payment. Used if the description of
         * payment (memo) is too long to naturally fit within the description field
         * of an encoded payment request.
         */
        descriptionHash?: (Uint8Array|null);

        /** Payment request expiry time in seconds. Default is 3600 (1 hour). */
        expiry?: (number|Long|null);

        /** Fallback on-chain address. */
        fallbackAddr?: (string|null);

        /** Delta to use for the time-lock of the CLTV extended to the final hop. */
        cltvExpiry?: (number|Long|null);

        /**
         * Route hints that can each be individually used to assist in reaching the
         * invoice's destination.
         */
        routeHints?: (lnrpc.IRouteHint[]|null);

        /** Whether this invoice should include routing hints for private channels. */
        "private"?: (boolean|null);

        /**
         * The "add" index of this invoice. Each newly created invoice will increment
         * this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all added
         * invoices with an add_index greater than this one.
         */
        addIndex?: (number|Long|null);

        /**
         * The "settle" index of this invoice. Each newly settled invoice will
         * increment this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all
         * settled invoices with an settle_index greater than this one.
         */
        settleIndex?: (number|Long|null);

        /**
         * The amount that was accepted for this invoice. This will ONLY be set if
         * this invoice has been settled. We provide this field as if the invoice was
         * created with a zero value, then we need to record what amount was
         * ultimately accepted. Additionally, it's possible that the sender paid MORE
         * that was specified in the original invoice. So we'll record that here as
         * well.
         */
        amtPaid?: (number|Long|null);
    }

    /** Represents an Invoice. */
    class Invoice implements IInvoice {

        /**
         * Constructs a new Invoice.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IInvoice);

        /**
         * An optional memo to attach along with the invoice. Used for record keeping
         * purposes for the invoice's creator, and will also be set in the description
         * field of the encoded payment request if the description_hash field is not
         * being used.
         */
        public memo: string;

        /** An optional cryptographic receipt of payment */
        public receipt: Uint8Array;

        /**
         * The hex-encoded preimage (32 byte) which will allow settling an incoming
         * HTLC payable to this preimage
         */
        public rPreimage: Uint8Array;

        /** The hash of the preimage */
        public rHash: Uint8Array;

        /** The value of this invoice in satoshis */
        public value: (number|Long);

        /** Whether this invoice has been fulfilled */
        public settled: boolean;

        /** When this invoice was created */
        public creationDate: (number|Long);

        /** When this invoice was settled */
        public settleDate: (number|Long);

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        public paymentRequest: string;

        /**
         * Hash (SHA-256) of a description of the payment. Used if the description of
         * payment (memo) is too long to naturally fit within the description field
         * of an encoded payment request.
         */
        public descriptionHash: Uint8Array;

        /** Payment request expiry time in seconds. Default is 3600 (1 hour). */
        public expiry: (number|Long);

        /** Fallback on-chain address. */
        public fallbackAddr: string;

        /** Delta to use for the time-lock of the CLTV extended to the final hop. */
        public cltvExpiry: (number|Long);

        /**
         * Route hints that can each be individually used to assist in reaching the
         * invoice's destination.
         */
        public routeHints: lnrpc.IRouteHint[];

        /** Whether this invoice should include routing hints for private channels. */
        public private: boolean;

        /**
         * The "add" index of this invoice. Each newly created invoice will increment
         * this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all added
         * invoices with an add_index greater than this one.
         */
        public addIndex: (number|Long);

        /**
         * The "settle" index of this invoice. Each newly settled invoice will
         * increment this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all
         * settled invoices with an settle_index greater than this one.
         */
        public settleIndex: (number|Long);

        /**
         * The amount that was accepted for this invoice. This will ONLY be set if
         * this invoice has been settled. We provide this field as if the invoice was
         * created with a zero value, then we need to record what amount was
         * ultimately accepted. Additionally, it's possible that the sender paid MORE
         * that was specified in the original invoice. So we'll record that here as
         * well.
         */
        public amtPaid: (number|Long);

        /**
         * Creates a new Invoice instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Invoice instance
         */
        public static create(properties?: lnrpc.IInvoice): lnrpc.Invoice;

        /**
         * Encodes the specified Invoice message. Does not implicitly {@link lnrpc.Invoice.verify|verify} messages.
         * @param message Invoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IInvoice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Invoice message, length delimited. Does not implicitly {@link lnrpc.Invoice.verify|verify} messages.
         * @param message Invoice message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IInvoice, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Invoice message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Invoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Invoice;

        /**
         * Decodes an Invoice message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Invoice
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Invoice;

        /**
         * Verifies an Invoice message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Invoice message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Invoice
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Invoice;

        /**
         * Creates a plain object from an Invoice message. Also converts values to other types if specified.
         * @param message Invoice
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Invoice, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Invoice to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AddInvoiceResponse. */
    interface IAddInvoiceResponse {

        /** AddInvoiceResponse rHash */
        rHash?: (Uint8Array|null);

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        paymentRequest?: (string|null);

        /**
         * The "add" index of this invoice. Each newly created invoice will increment
         * this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all added
         * invoices with an add_index greater than this one.
         */
        addIndex?: (number|Long|null);
    }

    /** Represents an AddInvoiceResponse. */
    class AddInvoiceResponse implements IAddInvoiceResponse {

        /**
         * Constructs a new AddInvoiceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IAddInvoiceResponse);

        /** AddInvoiceResponse rHash. */
        public rHash: Uint8Array;

        /**
         * A bare-bones invoice for a payment within the Lightning Network.  With the
         * details of the invoice, the sender has all the data necessary to send a
         * payment to the recipient.
         */
        public paymentRequest: string;

        /**
         * The "add" index of this invoice. Each newly created invoice will increment
         * this index making it monotonically increasing. Callers to the
         * SubscribeInvoices call can use this to instantly get notified of all added
         * invoices with an add_index greater than this one.
         */
        public addIndex: (number|Long);

        /**
         * Creates a new AddInvoiceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AddInvoiceResponse instance
         */
        public static create(properties?: lnrpc.IAddInvoiceResponse): lnrpc.AddInvoiceResponse;

        /**
         * Encodes the specified AddInvoiceResponse message. Does not implicitly {@link lnrpc.AddInvoiceResponse.verify|verify} messages.
         * @param message AddInvoiceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IAddInvoiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AddInvoiceResponse message, length delimited. Does not implicitly {@link lnrpc.AddInvoiceResponse.verify|verify} messages.
         * @param message AddInvoiceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IAddInvoiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AddInvoiceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AddInvoiceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.AddInvoiceResponse;

        /**
         * Decodes an AddInvoiceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AddInvoiceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.AddInvoiceResponse;

        /**
         * Verifies an AddInvoiceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AddInvoiceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AddInvoiceResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.AddInvoiceResponse;

        /**
         * Creates a plain object from an AddInvoiceResponse message. Also converts values to other types if specified.
         * @param message AddInvoiceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.AddInvoiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AddInvoiceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaymentHash. */
    interface IPaymentHash {

        /**
         * The hex-encoded payment hash of the invoice to be looked up. The passed
         * payment hash must be exactly 32 bytes, otherwise an error is returned.
         */
        rHashStr?: (string|null);

        /** The payment hash of the invoice to be looked up. */
        rHash?: (Uint8Array|null);
    }

    /** Represents a PaymentHash. */
    class PaymentHash implements IPaymentHash {

        /**
         * Constructs a new PaymentHash.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPaymentHash);

        /**
         * The hex-encoded payment hash of the invoice to be looked up. The passed
         * payment hash must be exactly 32 bytes, otherwise an error is returned.
         */
        public rHashStr: string;

        /** The payment hash of the invoice to be looked up. */
        public rHash: Uint8Array;

        /**
         * Creates a new PaymentHash instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymentHash instance
         */
        public static create(properties?: lnrpc.IPaymentHash): lnrpc.PaymentHash;

        /**
         * Encodes the specified PaymentHash message. Does not implicitly {@link lnrpc.PaymentHash.verify|verify} messages.
         * @param message PaymentHash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPaymentHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymentHash message, length delimited. Does not implicitly {@link lnrpc.PaymentHash.verify|verify} messages.
         * @param message PaymentHash message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPaymentHash, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymentHash message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymentHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PaymentHash;

        /**
         * Decodes a PaymentHash message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymentHash
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PaymentHash;

        /**
         * Verifies a PaymentHash message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymentHash message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymentHash
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PaymentHash;

        /**
         * Creates a plain object from a PaymentHash message. Also converts values to other types if specified.
         * @param message PaymentHash
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PaymentHash, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymentHash to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListInvoiceRequest. */
    interface IListInvoiceRequest {

        /** Toggles if all invoices should be returned, or only those that are currently unsettled. */
        pendingOnly?: (boolean|null);
    }

    /** Represents a ListInvoiceRequest. */
    class ListInvoiceRequest implements IListInvoiceRequest {

        /**
         * Constructs a new ListInvoiceRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListInvoiceRequest);

        /** Toggles if all invoices should be returned, or only those that are currently unsettled. */
        public pendingOnly: boolean;

        /**
         * Creates a new ListInvoiceRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListInvoiceRequest instance
         */
        public static create(properties?: lnrpc.IListInvoiceRequest): lnrpc.ListInvoiceRequest;

        /**
         * Encodes the specified ListInvoiceRequest message. Does not implicitly {@link lnrpc.ListInvoiceRequest.verify|verify} messages.
         * @param message ListInvoiceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListInvoiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListInvoiceRequest message, length delimited. Does not implicitly {@link lnrpc.ListInvoiceRequest.verify|verify} messages.
         * @param message ListInvoiceRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListInvoiceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListInvoiceRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListInvoiceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListInvoiceRequest;

        /**
         * Decodes a ListInvoiceRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListInvoiceRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListInvoiceRequest;

        /**
         * Verifies a ListInvoiceRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListInvoiceRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListInvoiceRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListInvoiceRequest;

        /**
         * Creates a plain object from a ListInvoiceRequest message. Also converts values to other types if specified.
         * @param message ListInvoiceRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListInvoiceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListInvoiceRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListInvoiceResponse. */
    interface IListInvoiceResponse {

        /** ListInvoiceResponse invoices */
        invoices?: (lnrpc.IInvoice[]|null);
    }

    /** Represents a ListInvoiceResponse. */
    class ListInvoiceResponse implements IListInvoiceResponse {

        /**
         * Constructs a new ListInvoiceResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListInvoiceResponse);

        /** ListInvoiceResponse invoices. */
        public invoices: lnrpc.IInvoice[];

        /**
         * Creates a new ListInvoiceResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListInvoiceResponse instance
         */
        public static create(properties?: lnrpc.IListInvoiceResponse): lnrpc.ListInvoiceResponse;

        /**
         * Encodes the specified ListInvoiceResponse message. Does not implicitly {@link lnrpc.ListInvoiceResponse.verify|verify} messages.
         * @param message ListInvoiceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListInvoiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListInvoiceResponse message, length delimited. Does not implicitly {@link lnrpc.ListInvoiceResponse.verify|verify} messages.
         * @param message ListInvoiceResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListInvoiceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListInvoiceResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListInvoiceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListInvoiceResponse;

        /**
         * Decodes a ListInvoiceResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListInvoiceResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListInvoiceResponse;

        /**
         * Verifies a ListInvoiceResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListInvoiceResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListInvoiceResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListInvoiceResponse;

        /**
         * Creates a plain object from a ListInvoiceResponse message. Also converts values to other types if specified.
         * @param message ListInvoiceResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListInvoiceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListInvoiceResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InvoiceSubscription. */
    interface IInvoiceSubscription {

        /**
         * If specified (non-zero), then we'll first start by sending out
         * notifications for all added indexes with an add_index greater than this
         * value. This allows callers to catch up on any events they missed while they
         * weren't connected to the streaming RPC.
         */
        addIndex?: (number|Long|null);

        /**
         * If specified (non-zero), then we'll first start by sending out
         * notifications for all settled indexes with an settle_index greater than
         * this value. This allows callers to catch up on any events they missed while
         * they weren't connected to the streaming RPC.
         */
        settleIndex?: (number|Long|null);
    }

    /** Represents an InvoiceSubscription. */
    class InvoiceSubscription implements IInvoiceSubscription {

        /**
         * Constructs a new InvoiceSubscription.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IInvoiceSubscription);

        /**
         * If specified (non-zero), then we'll first start by sending out
         * notifications for all added indexes with an add_index greater than this
         * value. This allows callers to catch up on any events they missed while they
         * weren't connected to the streaming RPC.
         */
        public addIndex: (number|Long);

        /**
         * If specified (non-zero), then we'll first start by sending out
         * notifications for all settled indexes with an settle_index greater than
         * this value. This allows callers to catch up on any events they missed while
         * they weren't connected to the streaming RPC.
         */
        public settleIndex: (number|Long);

        /**
         * Creates a new InvoiceSubscription instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InvoiceSubscription instance
         */
        public static create(properties?: lnrpc.IInvoiceSubscription): lnrpc.InvoiceSubscription;

        /**
         * Encodes the specified InvoiceSubscription message. Does not implicitly {@link lnrpc.InvoiceSubscription.verify|verify} messages.
         * @param message InvoiceSubscription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IInvoiceSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InvoiceSubscription message, length delimited. Does not implicitly {@link lnrpc.InvoiceSubscription.verify|verify} messages.
         * @param message InvoiceSubscription message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IInvoiceSubscription, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InvoiceSubscription message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InvoiceSubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.InvoiceSubscription;

        /**
         * Decodes an InvoiceSubscription message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InvoiceSubscription
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.InvoiceSubscription;

        /**
         * Verifies an InvoiceSubscription message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InvoiceSubscription message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InvoiceSubscription
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.InvoiceSubscription;

        /**
         * Creates a plain object from an InvoiceSubscription message. Also converts values to other types if specified.
         * @param message InvoiceSubscription
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.InvoiceSubscription, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InvoiceSubscription to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Payment. */
    interface IPayment {

        /** The payment hash */
        paymentHash?: (string|null);

        /** The value of the payment in satoshis */
        value?: (number|Long|null);

        /** The date of this payment */
        creationDate?: (number|Long|null);

        /** The path this payment took */
        path?: (string[]|null);

        /** The fee paid for this payment in satoshis */
        fee?: (number|Long|null);

        /** The payment preimage */
        paymentPreimage?: (string|null);
    }

    /** Represents a Payment. */
    class Payment implements IPayment {

        /**
         * Constructs a new Payment.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPayment);

        /** The payment hash */
        public paymentHash: string;

        /** The value of the payment in satoshis */
        public value: (number|Long);

        /** The date of this payment */
        public creationDate: (number|Long);

        /** The path this payment took */
        public path: string[];

        /** The fee paid for this payment in satoshis */
        public fee: (number|Long);

        /** The payment preimage */
        public paymentPreimage: string;

        /**
         * Creates a new Payment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Payment instance
         */
        public static create(properties?: lnrpc.IPayment): lnrpc.Payment;

        /**
         * Encodes the specified Payment message. Does not implicitly {@link lnrpc.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Payment message, length delimited. Does not implicitly {@link lnrpc.Payment.verify|verify} messages.
         * @param message Payment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPayment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Payment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.Payment;

        /**
         * Decodes a Payment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Payment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.Payment;

        /**
         * Verifies a Payment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Payment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Payment
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.Payment;

        /**
         * Creates a plain object from a Payment message. Also converts values to other types if specified.
         * @param message Payment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.Payment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Payment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPaymentsRequest. */
    interface IListPaymentsRequest {
    }

    /** Represents a ListPaymentsRequest. */
    class ListPaymentsRequest implements IListPaymentsRequest {

        /**
         * Constructs a new ListPaymentsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListPaymentsRequest);

        /**
         * Creates a new ListPaymentsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPaymentsRequest instance
         */
        public static create(properties?: lnrpc.IListPaymentsRequest): lnrpc.ListPaymentsRequest;

        /**
         * Encodes the specified ListPaymentsRequest message. Does not implicitly {@link lnrpc.ListPaymentsRequest.verify|verify} messages.
         * @param message ListPaymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListPaymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPaymentsRequest message, length delimited. Does not implicitly {@link lnrpc.ListPaymentsRequest.verify|verify} messages.
         * @param message ListPaymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListPaymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPaymentsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListPaymentsRequest;

        /**
         * Decodes a ListPaymentsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListPaymentsRequest;

        /**
         * Verifies a ListPaymentsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPaymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPaymentsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListPaymentsRequest;

        /**
         * Creates a plain object from a ListPaymentsRequest message. Also converts values to other types if specified.
         * @param message ListPaymentsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListPaymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPaymentsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListPaymentsResponse. */
    interface IListPaymentsResponse {

        /** The list of payments */
        payments?: (lnrpc.IPayment[]|null);
    }

    /** Represents a ListPaymentsResponse. */
    class ListPaymentsResponse implements IListPaymentsResponse {

        /**
         * Constructs a new ListPaymentsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IListPaymentsResponse);

        /** The list of payments */
        public payments: lnrpc.IPayment[];

        /**
         * Creates a new ListPaymentsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListPaymentsResponse instance
         */
        public static create(properties?: lnrpc.IListPaymentsResponse): lnrpc.ListPaymentsResponse;

        /**
         * Encodes the specified ListPaymentsResponse message. Does not implicitly {@link lnrpc.ListPaymentsResponse.verify|verify} messages.
         * @param message ListPaymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IListPaymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListPaymentsResponse message, length delimited. Does not implicitly {@link lnrpc.ListPaymentsResponse.verify|verify} messages.
         * @param message ListPaymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IListPaymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListPaymentsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ListPaymentsResponse;

        /**
         * Decodes a ListPaymentsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ListPaymentsResponse;

        /**
         * Verifies a ListPaymentsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListPaymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListPaymentsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ListPaymentsResponse;

        /**
         * Creates a plain object from a ListPaymentsResponse message. Also converts values to other types if specified.
         * @param message ListPaymentsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ListPaymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListPaymentsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteAllPaymentsRequest. */
    interface IDeleteAllPaymentsRequest {
    }

    /** Represents a DeleteAllPaymentsRequest. */
    class DeleteAllPaymentsRequest implements IDeleteAllPaymentsRequest {

        /**
         * Constructs a new DeleteAllPaymentsRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDeleteAllPaymentsRequest);

        /**
         * Creates a new DeleteAllPaymentsRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteAllPaymentsRequest instance
         */
        public static create(properties?: lnrpc.IDeleteAllPaymentsRequest): lnrpc.DeleteAllPaymentsRequest;

        /**
         * Encodes the specified DeleteAllPaymentsRequest message. Does not implicitly {@link lnrpc.DeleteAllPaymentsRequest.verify|verify} messages.
         * @param message DeleteAllPaymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDeleteAllPaymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteAllPaymentsRequest message, length delimited. Does not implicitly {@link lnrpc.DeleteAllPaymentsRequest.verify|verify} messages.
         * @param message DeleteAllPaymentsRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDeleteAllPaymentsRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteAllPaymentsRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteAllPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DeleteAllPaymentsRequest;

        /**
         * Decodes a DeleteAllPaymentsRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteAllPaymentsRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DeleteAllPaymentsRequest;

        /**
         * Verifies a DeleteAllPaymentsRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteAllPaymentsRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteAllPaymentsRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DeleteAllPaymentsRequest;

        /**
         * Creates a plain object from a DeleteAllPaymentsRequest message. Also converts values to other types if specified.
         * @param message DeleteAllPaymentsRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DeleteAllPaymentsRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteAllPaymentsRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DeleteAllPaymentsResponse. */
    interface IDeleteAllPaymentsResponse {
    }

    /** Represents a DeleteAllPaymentsResponse. */
    class DeleteAllPaymentsResponse implements IDeleteAllPaymentsResponse {

        /**
         * Constructs a new DeleteAllPaymentsResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDeleteAllPaymentsResponse);

        /**
         * Creates a new DeleteAllPaymentsResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DeleteAllPaymentsResponse instance
         */
        public static create(properties?: lnrpc.IDeleteAllPaymentsResponse): lnrpc.DeleteAllPaymentsResponse;

        /**
         * Encodes the specified DeleteAllPaymentsResponse message. Does not implicitly {@link lnrpc.DeleteAllPaymentsResponse.verify|verify} messages.
         * @param message DeleteAllPaymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDeleteAllPaymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DeleteAllPaymentsResponse message, length delimited. Does not implicitly {@link lnrpc.DeleteAllPaymentsResponse.verify|verify} messages.
         * @param message DeleteAllPaymentsResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDeleteAllPaymentsResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeleteAllPaymentsResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DeleteAllPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DeleteAllPaymentsResponse;

        /**
         * Decodes a DeleteAllPaymentsResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DeleteAllPaymentsResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DeleteAllPaymentsResponse;

        /**
         * Verifies a DeleteAllPaymentsResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DeleteAllPaymentsResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DeleteAllPaymentsResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DeleteAllPaymentsResponse;

        /**
         * Creates a plain object from a DeleteAllPaymentsResponse message. Also converts values to other types if specified.
         * @param message DeleteAllPaymentsResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DeleteAllPaymentsResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DeleteAllPaymentsResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugLevelRequest. */
    interface IDebugLevelRequest {

        /** DebugLevelRequest show */
        show?: (boolean|null);

        /** DebugLevelRequest levelSpec */
        levelSpec?: (string|null);
    }

    /** Represents a DebugLevelRequest. */
    class DebugLevelRequest implements IDebugLevelRequest {

        /**
         * Constructs a new DebugLevelRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDebugLevelRequest);

        /** DebugLevelRequest show. */
        public show: boolean;

        /** DebugLevelRequest levelSpec. */
        public levelSpec: string;

        /**
         * Creates a new DebugLevelRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugLevelRequest instance
         */
        public static create(properties?: lnrpc.IDebugLevelRequest): lnrpc.DebugLevelRequest;

        /**
         * Encodes the specified DebugLevelRequest message. Does not implicitly {@link lnrpc.DebugLevelRequest.verify|verify} messages.
         * @param message DebugLevelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDebugLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugLevelRequest message, length delimited. Does not implicitly {@link lnrpc.DebugLevelRequest.verify|verify} messages.
         * @param message DebugLevelRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDebugLevelRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugLevelRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugLevelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DebugLevelRequest;

        /**
         * Decodes a DebugLevelRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugLevelRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DebugLevelRequest;

        /**
         * Verifies a DebugLevelRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugLevelRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugLevelRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DebugLevelRequest;

        /**
         * Creates a plain object from a DebugLevelRequest message. Also converts values to other types if specified.
         * @param message DebugLevelRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DebugLevelRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugLevelRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DebugLevelResponse. */
    interface IDebugLevelResponse {

        /** DebugLevelResponse subSystems */
        subSystems?: (string|null);
    }

    /** Represents a DebugLevelResponse. */
    class DebugLevelResponse implements IDebugLevelResponse {

        /**
         * Constructs a new DebugLevelResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IDebugLevelResponse);

        /** DebugLevelResponse subSystems. */
        public subSystems: string;

        /**
         * Creates a new DebugLevelResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DebugLevelResponse instance
         */
        public static create(properties?: lnrpc.IDebugLevelResponse): lnrpc.DebugLevelResponse;

        /**
         * Encodes the specified DebugLevelResponse message. Does not implicitly {@link lnrpc.DebugLevelResponse.verify|verify} messages.
         * @param message DebugLevelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IDebugLevelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DebugLevelResponse message, length delimited. Does not implicitly {@link lnrpc.DebugLevelResponse.verify|verify} messages.
         * @param message DebugLevelResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IDebugLevelResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DebugLevelResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DebugLevelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.DebugLevelResponse;

        /**
         * Decodes a DebugLevelResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DebugLevelResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.DebugLevelResponse;

        /**
         * Verifies a DebugLevelResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DebugLevelResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DebugLevelResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.DebugLevelResponse;

        /**
         * Creates a plain object from a DebugLevelResponse message. Also converts values to other types if specified.
         * @param message DebugLevelResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.DebugLevelResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DebugLevelResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PayReqString. */
    interface IPayReqString {

        /** The payment request string to be decoded */
        payReq?: (string|null);
    }

    /** Represents a PayReqString. */
    class PayReqString implements IPayReqString {

        /**
         * Constructs a new PayReqString.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPayReqString);

        /** The payment request string to be decoded */
        public payReq: string;

        /**
         * Creates a new PayReqString instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PayReqString instance
         */
        public static create(properties?: lnrpc.IPayReqString): lnrpc.PayReqString;

        /**
         * Encodes the specified PayReqString message. Does not implicitly {@link lnrpc.PayReqString.verify|verify} messages.
         * @param message PayReqString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPayReqString, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PayReqString message, length delimited. Does not implicitly {@link lnrpc.PayReqString.verify|verify} messages.
         * @param message PayReqString message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPayReqString, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PayReqString message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PayReqString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PayReqString;

        /**
         * Decodes a PayReqString message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PayReqString
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PayReqString;

        /**
         * Verifies a PayReqString message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PayReqString message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PayReqString
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PayReqString;

        /**
         * Creates a plain object from a PayReqString message. Also converts values to other types if specified.
         * @param message PayReqString
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PayReqString, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PayReqString to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PayReq. */
    interface IPayReq {

        /** PayReq destination */
        destination?: (string|null);

        /** PayReq paymentHash */
        paymentHash?: (string|null);

        /** PayReq numSatoshis */
        numSatoshis?: (number|Long|null);

        /** PayReq timestamp */
        timestamp?: (number|Long|null);

        /** PayReq expiry */
        expiry?: (number|Long|null);

        /** PayReq description */
        description?: (string|null);

        /** PayReq descriptionHash */
        descriptionHash?: (string|null);

        /** PayReq fallbackAddr */
        fallbackAddr?: (string|null);

        /** PayReq cltvExpiry */
        cltvExpiry?: (number|Long|null);

        /** PayReq routeHints */
        routeHints?: (lnrpc.IRouteHint[]|null);
    }

    /** Represents a PayReq. */
    class PayReq implements IPayReq {

        /**
         * Constructs a new PayReq.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPayReq);

        /** PayReq destination. */
        public destination: string;

        /** PayReq paymentHash. */
        public paymentHash: string;

        /** PayReq numSatoshis. */
        public numSatoshis: (number|Long);

        /** PayReq timestamp. */
        public timestamp: (number|Long);

        /** PayReq expiry. */
        public expiry: (number|Long);

        /** PayReq description. */
        public description: string;

        /** PayReq descriptionHash. */
        public descriptionHash: string;

        /** PayReq fallbackAddr. */
        public fallbackAddr: string;

        /** PayReq cltvExpiry. */
        public cltvExpiry: (number|Long);

        /** PayReq routeHints. */
        public routeHints: lnrpc.IRouteHint[];

        /**
         * Creates a new PayReq instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PayReq instance
         */
        public static create(properties?: lnrpc.IPayReq): lnrpc.PayReq;

        /**
         * Encodes the specified PayReq message. Does not implicitly {@link lnrpc.PayReq.verify|verify} messages.
         * @param message PayReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPayReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PayReq message, length delimited. Does not implicitly {@link lnrpc.PayReq.verify|verify} messages.
         * @param message PayReq message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPayReq, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PayReq message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PayReq;

        /**
         * Decodes a PayReq message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PayReq;

        /**
         * Verifies a PayReq message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PayReq message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PayReq
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PayReq;

        /**
         * Creates a plain object from a PayReq message. Also converts values to other types if specified.
         * @param message PayReq
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PayReq, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PayReq to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeeReportRequest. */
    interface IFeeReportRequest {
    }

    /** Represents a FeeReportRequest. */
    class FeeReportRequest implements IFeeReportRequest {

        /**
         * Constructs a new FeeReportRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IFeeReportRequest);

        /**
         * Creates a new FeeReportRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeReportRequest instance
         */
        public static create(properties?: lnrpc.IFeeReportRequest): lnrpc.FeeReportRequest;

        /**
         * Encodes the specified FeeReportRequest message. Does not implicitly {@link lnrpc.FeeReportRequest.verify|verify} messages.
         * @param message FeeReportRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IFeeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeReportRequest message, length delimited. Does not implicitly {@link lnrpc.FeeReportRequest.verify|verify} messages.
         * @param message FeeReportRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IFeeReportRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeReportRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeReportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.FeeReportRequest;

        /**
         * Decodes a FeeReportRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeReportRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.FeeReportRequest;

        /**
         * Verifies a FeeReportRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeReportRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeReportRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.FeeReportRequest;

        /**
         * Creates a plain object from a FeeReportRequest message. Also converts values to other types if specified.
         * @param message FeeReportRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.FeeReportRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeReportRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelFeeReport. */
    interface IChannelFeeReport {

        /** The channel that this fee report belongs to. */
        chanPoint?: (string|null);

        /** The base fee charged regardless of the number of milli-satoshis sent. */
        baseFeeMsat?: (number|Long|null);

        /** The amount charged per milli-satoshis transferred expressed in millionths of a satoshi. */
        feePerMil?: (number|Long|null);

        /** The effective fee rate in milli-satoshis. Computed by dividing the fee_per_mil value by 1 million. */
        feeRate?: (number|null);
    }

    /** Represents a ChannelFeeReport. */
    class ChannelFeeReport implements IChannelFeeReport {

        /**
         * Constructs a new ChannelFeeReport.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IChannelFeeReport);

        /** The channel that this fee report belongs to. */
        public chanPoint: string;

        /** The base fee charged regardless of the number of milli-satoshis sent. */
        public baseFeeMsat: (number|Long);

        /** The amount charged per milli-satoshis transferred expressed in millionths of a satoshi. */
        public feePerMil: (number|Long);

        /** The effective fee rate in milli-satoshis. Computed by dividing the fee_per_mil value by 1 million. */
        public feeRate: number;

        /**
         * Creates a new ChannelFeeReport instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelFeeReport instance
         */
        public static create(properties?: lnrpc.IChannelFeeReport): lnrpc.ChannelFeeReport;

        /**
         * Encodes the specified ChannelFeeReport message. Does not implicitly {@link lnrpc.ChannelFeeReport.verify|verify} messages.
         * @param message ChannelFeeReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IChannelFeeReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelFeeReport message, length delimited. Does not implicitly {@link lnrpc.ChannelFeeReport.verify|verify} messages.
         * @param message ChannelFeeReport message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IChannelFeeReport, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelFeeReport message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelFeeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ChannelFeeReport;

        /**
         * Decodes a ChannelFeeReport message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelFeeReport
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ChannelFeeReport;

        /**
         * Verifies a ChannelFeeReport message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelFeeReport message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelFeeReport
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ChannelFeeReport;

        /**
         * Creates a plain object from a ChannelFeeReport message. Also converts values to other types if specified.
         * @param message ChannelFeeReport
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ChannelFeeReport, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelFeeReport to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FeeReportResponse. */
    interface IFeeReportResponse {

        /** An array of channel fee reports which describes the current fee schedule for each channel. */
        channelFees?: (lnrpc.IChannelFeeReport[]|null);

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 24 hrs. */
        dayFeeSum?: (number|Long|null);

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 1 week. */
        weekFeeSum?: (number|Long|null);

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 1 month. */
        monthFeeSum?: (number|Long|null);
    }

    /** Represents a FeeReportResponse. */
    class FeeReportResponse implements IFeeReportResponse {

        /**
         * Constructs a new FeeReportResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IFeeReportResponse);

        /** An array of channel fee reports which describes the current fee schedule for each channel. */
        public channelFees: lnrpc.IChannelFeeReport[];

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 24 hrs. */
        public dayFeeSum: (number|Long);

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 1 week. */
        public weekFeeSum: (number|Long);

        /** The total amount of fee revenue (in satoshis) the switch has collected over the past 1 month. */
        public monthFeeSum: (number|Long);

        /**
         * Creates a new FeeReportResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FeeReportResponse instance
         */
        public static create(properties?: lnrpc.IFeeReportResponse): lnrpc.FeeReportResponse;

        /**
         * Encodes the specified FeeReportResponse message. Does not implicitly {@link lnrpc.FeeReportResponse.verify|verify} messages.
         * @param message FeeReportResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IFeeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FeeReportResponse message, length delimited. Does not implicitly {@link lnrpc.FeeReportResponse.verify|verify} messages.
         * @param message FeeReportResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IFeeReportResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FeeReportResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FeeReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.FeeReportResponse;

        /**
         * Decodes a FeeReportResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FeeReportResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.FeeReportResponse;

        /**
         * Verifies a FeeReportResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FeeReportResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FeeReportResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.FeeReportResponse;

        /**
         * Creates a plain object from a FeeReportResponse message. Also converts values to other types if specified.
         * @param message FeeReportResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.FeeReportResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FeeReportResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PolicyUpdateRequest. */
    interface IPolicyUpdateRequest {

        /** If set, then this update applies to all currently active channels. */
        global?: (boolean|null);

        /** If set, this update will target a specific channel. */
        chanPoint?: (lnrpc.IChannelPoint|null);

        /** The base fee charged regardless of the number of milli-satoshis sent. */
        baseFeeMsat?: (number|Long|null);

        /** The effective fee rate in milli-satoshis. The precision of this value goes up to 6 decimal places, so 1e-6. */
        feeRate?: (number|null);

        /** The required timelock delta for HTLCs forwarded over the channel. */
        timeLockDelta?: (number|null);
    }

    /** Represents a PolicyUpdateRequest. */
    class PolicyUpdateRequest implements IPolicyUpdateRequest {

        /**
         * Constructs a new PolicyUpdateRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPolicyUpdateRequest);

        /** If set, then this update applies to all currently active channels. */
        public global: boolean;

        /** If set, this update will target a specific channel. */
        public chanPoint?: (lnrpc.IChannelPoint|null);

        /** The base fee charged regardless of the number of milli-satoshis sent. */
        public baseFeeMsat: (number|Long);

        /** The effective fee rate in milli-satoshis. The precision of this value goes up to 6 decimal places, so 1e-6. */
        public feeRate: number;

        /** The required timelock delta for HTLCs forwarded over the channel. */
        public timeLockDelta: number;

        /** PolicyUpdateRequest scope. */
        public scope?: ("global"|"chanPoint");

        /**
         * Creates a new PolicyUpdateRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PolicyUpdateRequest instance
         */
        public static create(properties?: lnrpc.IPolicyUpdateRequest): lnrpc.PolicyUpdateRequest;

        /**
         * Encodes the specified PolicyUpdateRequest message. Does not implicitly {@link lnrpc.PolicyUpdateRequest.verify|verify} messages.
         * @param message PolicyUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPolicyUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PolicyUpdateRequest message, length delimited. Does not implicitly {@link lnrpc.PolicyUpdateRequest.verify|verify} messages.
         * @param message PolicyUpdateRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPolicyUpdateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PolicyUpdateRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PolicyUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PolicyUpdateRequest;

        /**
         * Decodes a PolicyUpdateRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PolicyUpdateRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PolicyUpdateRequest;

        /**
         * Verifies a PolicyUpdateRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PolicyUpdateRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PolicyUpdateRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PolicyUpdateRequest;

        /**
         * Creates a plain object from a PolicyUpdateRequest message. Also converts values to other types if specified.
         * @param message PolicyUpdateRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PolicyUpdateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PolicyUpdateRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PolicyUpdateResponse. */
    interface IPolicyUpdateResponse {
    }

    /** Represents a PolicyUpdateResponse. */
    class PolicyUpdateResponse implements IPolicyUpdateResponse {

        /**
         * Constructs a new PolicyUpdateResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IPolicyUpdateResponse);

        /**
         * Creates a new PolicyUpdateResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PolicyUpdateResponse instance
         */
        public static create(properties?: lnrpc.IPolicyUpdateResponse): lnrpc.PolicyUpdateResponse;

        /**
         * Encodes the specified PolicyUpdateResponse message. Does not implicitly {@link lnrpc.PolicyUpdateResponse.verify|verify} messages.
         * @param message PolicyUpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IPolicyUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PolicyUpdateResponse message, length delimited. Does not implicitly {@link lnrpc.PolicyUpdateResponse.verify|verify} messages.
         * @param message PolicyUpdateResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IPolicyUpdateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PolicyUpdateResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PolicyUpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.PolicyUpdateResponse;

        /**
         * Decodes a PolicyUpdateResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PolicyUpdateResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.PolicyUpdateResponse;

        /**
         * Verifies a PolicyUpdateResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PolicyUpdateResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PolicyUpdateResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.PolicyUpdateResponse;

        /**
         * Creates a plain object from a PolicyUpdateResponse message. Also converts values to other types if specified.
         * @param message PolicyUpdateResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.PolicyUpdateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PolicyUpdateResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForwardingHistoryRequest. */
    interface IForwardingHistoryRequest {

        /** Start time is the starting point of the forwarding history request. All records beyond this point will be included, respecting the end time, and the index offset. */
        startTime?: (number|Long|null);

        /** End time is the end point of the forwarding history request. The response will carry at most 50k records between the start time and the end time. The index offset can be used to implement pagination. */
        endTime?: (number|Long|null);

        /** Index offset is the offset in the time series to start at. As each response can only contain 50k records, callers can use this to skip around within a packed time series. */
        indexOffset?: (number|null);

        /** The max number of events to return in the response to this query. */
        numMaxEvents?: (number|null);
    }

    /** Represents a ForwardingHistoryRequest. */
    class ForwardingHistoryRequest implements IForwardingHistoryRequest {

        /**
         * Constructs a new ForwardingHistoryRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IForwardingHistoryRequest);

        /** Start time is the starting point of the forwarding history request. All records beyond this point will be included, respecting the end time, and the index offset. */
        public startTime: (number|Long);

        /** End time is the end point of the forwarding history request. The response will carry at most 50k records between the start time and the end time. The index offset can be used to implement pagination. */
        public endTime: (number|Long);

        /** Index offset is the offset in the time series to start at. As each response can only contain 50k records, callers can use this to skip around within a packed time series. */
        public indexOffset: number;

        /** The max number of events to return in the response to this query. */
        public numMaxEvents: number;

        /**
         * Creates a new ForwardingHistoryRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForwardingHistoryRequest instance
         */
        public static create(properties?: lnrpc.IForwardingHistoryRequest): lnrpc.ForwardingHistoryRequest;

        /**
         * Encodes the specified ForwardingHistoryRequest message. Does not implicitly {@link lnrpc.ForwardingHistoryRequest.verify|verify} messages.
         * @param message ForwardingHistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IForwardingHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForwardingHistoryRequest message, length delimited. Does not implicitly {@link lnrpc.ForwardingHistoryRequest.verify|verify} messages.
         * @param message ForwardingHistoryRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IForwardingHistoryRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForwardingHistoryRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForwardingHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ForwardingHistoryRequest;

        /**
         * Decodes a ForwardingHistoryRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForwardingHistoryRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ForwardingHistoryRequest;

        /**
         * Verifies a ForwardingHistoryRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForwardingHistoryRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForwardingHistoryRequest
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ForwardingHistoryRequest;

        /**
         * Creates a plain object from a ForwardingHistoryRequest message. Also converts values to other types if specified.
         * @param message ForwardingHistoryRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ForwardingHistoryRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForwardingHistoryRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForwardingEvent. */
    interface IForwardingEvent {

        /** Timestamp is the time (unix epoch offset) that this circuit was completed. */
        timestamp?: (number|Long|null);

        /** The incoming channel ID that carried the HTLC that created the circuit. */
        chanIdIn?: (number|Long|null);

        /** The outgoing channel ID that carried the preimage that completed the circuit. */
        chanIdOut?: (number|Long|null);

        /** The total amount of the incoming HTLC that created half the circuit. */
        amtIn?: (number|Long|null);

        /** The total amount of the outgoign HTLC that created the second half of the circuit. */
        amtOut?: (number|Long|null);

        /** The total fee that this payment circuit carried. */
        fee?: (number|Long|null);
    }

    /** Represents a ForwardingEvent. */
    class ForwardingEvent implements IForwardingEvent {

        /**
         * Constructs a new ForwardingEvent.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IForwardingEvent);

        /** Timestamp is the time (unix epoch offset) that this circuit was completed. */
        public timestamp: (number|Long);

        /** The incoming channel ID that carried the HTLC that created the circuit. */
        public chanIdIn: (number|Long);

        /** The outgoing channel ID that carried the preimage that completed the circuit. */
        public chanIdOut: (number|Long);

        /** The total amount of the incoming HTLC that created half the circuit. */
        public amtIn: (number|Long);

        /** The total amount of the outgoign HTLC that created the second half of the circuit. */
        public amtOut: (number|Long);

        /** The total fee that this payment circuit carried. */
        public fee: (number|Long);

        /**
         * Creates a new ForwardingEvent instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForwardingEvent instance
         */
        public static create(properties?: lnrpc.IForwardingEvent): lnrpc.ForwardingEvent;

        /**
         * Encodes the specified ForwardingEvent message. Does not implicitly {@link lnrpc.ForwardingEvent.verify|verify} messages.
         * @param message ForwardingEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IForwardingEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForwardingEvent message, length delimited. Does not implicitly {@link lnrpc.ForwardingEvent.verify|verify} messages.
         * @param message ForwardingEvent message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IForwardingEvent, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForwardingEvent message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForwardingEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ForwardingEvent;

        /**
         * Decodes a ForwardingEvent message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForwardingEvent
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ForwardingEvent;

        /**
         * Verifies a ForwardingEvent message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForwardingEvent message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForwardingEvent
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ForwardingEvent;

        /**
         * Creates a plain object from a ForwardingEvent message. Also converts values to other types if specified.
         * @param message ForwardingEvent
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ForwardingEvent, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForwardingEvent to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ForwardingHistoryResponse. */
    interface IForwardingHistoryResponse {

        /** A list of forwarding events from the time slice of the time series specified in the request. */
        forwardingEvents?: (lnrpc.IForwardingEvent[]|null);

        /** The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style. */
        lastOffsetIndex?: (number|null);
    }

    /** Represents a ForwardingHistoryResponse. */
    class ForwardingHistoryResponse implements IForwardingHistoryResponse {

        /**
         * Constructs a new ForwardingHistoryResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: lnrpc.IForwardingHistoryResponse);

        /** A list of forwarding events from the time slice of the time series specified in the request. */
        public forwardingEvents: lnrpc.IForwardingEvent[];

        /** The index of the last time in the set of returned forwarding events. Can be used to seek further, pagination style. */
        public lastOffsetIndex: number;

        /**
         * Creates a new ForwardingHistoryResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ForwardingHistoryResponse instance
         */
        public static create(properties?: lnrpc.IForwardingHistoryResponse): lnrpc.ForwardingHistoryResponse;

        /**
         * Encodes the specified ForwardingHistoryResponse message. Does not implicitly {@link lnrpc.ForwardingHistoryResponse.verify|verify} messages.
         * @param message ForwardingHistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: lnrpc.IForwardingHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ForwardingHistoryResponse message, length delimited. Does not implicitly {@link lnrpc.ForwardingHistoryResponse.verify|verify} messages.
         * @param message ForwardingHistoryResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: lnrpc.IForwardingHistoryResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ForwardingHistoryResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ForwardingHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): lnrpc.ForwardingHistoryResponse;

        /**
         * Decodes a ForwardingHistoryResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ForwardingHistoryResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): lnrpc.ForwardingHistoryResponse;

        /**
         * Verifies a ForwardingHistoryResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ForwardingHistoryResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ForwardingHistoryResponse
         */
        public static fromObject(object: { [k: string]: any }): lnrpc.ForwardingHistoryResponse;

        /**
         * Creates a plain object from a ForwardingHistoryResponse message. Also converts values to other types if specified.
         * @param message ForwardingHistoryResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: lnrpc.ForwardingHistoryResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ForwardingHistoryResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace api. */
    namespace api {

        /** Properties of a Http. */
        interface IHttp {

            /** Http rules */
            rules?: (google.api.IHttpRule[]|null);
        }

        /** Represents a Http. */
        class Http implements IHttp {

            /**
             * Constructs a new Http.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttp);

            /** Http rules. */
            public rules: google.api.IHttpRule[];

            /**
             * Creates a new Http instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Http instance
             */
            public static create(properties?: google.api.IHttp): google.api.Http;

            /**
             * Encodes the specified Http message. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Http message, length delimited. Does not implicitly {@link google.api.Http.verify|verify} messages.
             * @param message Http message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttp, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a Http message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.Http;

            /**
             * Decodes a Http message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Http
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.Http;

            /**
             * Verifies a Http message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a Http message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Http
             */
            public static fromObject(object: { [k: string]: any }): google.api.Http;

            /**
             * Creates a plain object from a Http message. Also converts values to other types if specified.
             * @param message Http
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.Http, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Http to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a HttpRule. */
        interface IHttpRule {

            /** HttpRule get */
            get?: (string|null);

            /** HttpRule put */
            put?: (string|null);

            /** HttpRule post */
            post?: (string|null);

            /** HttpRule delete */
            "delete"?: (string|null);

            /** HttpRule patch */
            patch?: (string|null);

            /** HttpRule custom */
            custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector */
            selector?: (string|null);

            /** HttpRule body */
            body?: (string|null);

            /** HttpRule additionalBindings */
            additionalBindings?: (google.api.IHttpRule[]|null);
        }

        /** Represents a HttpRule. */
        class HttpRule implements IHttpRule {

            /**
             * Constructs a new HttpRule.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.IHttpRule);

            /** HttpRule get. */
            public get: string;

            /** HttpRule put. */
            public put: string;

            /** HttpRule post. */
            public post: string;

            /** HttpRule delete. */
            public delete: string;

            /** HttpRule patch. */
            public patch: string;

            /** HttpRule custom. */
            public custom?: (google.api.ICustomHttpPattern|null);

            /** HttpRule selector. */
            public selector: string;

            /** HttpRule body. */
            public body: string;

            /** HttpRule additionalBindings. */
            public additionalBindings: google.api.IHttpRule[];

            /** HttpRule pattern. */
            public pattern?: ("get"|"put"|"post"|"delete"|"patch"|"custom");

            /**
             * Creates a new HttpRule instance using the specified properties.
             * @param [properties] Properties to set
             * @returns HttpRule instance
             */
            public static create(properties?: google.api.IHttpRule): google.api.HttpRule;

            /**
             * Encodes the specified HttpRule message. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified HttpRule message, length delimited. Does not implicitly {@link google.api.HttpRule.verify|verify} messages.
             * @param message HttpRule message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.IHttpRule, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HttpRule message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.HttpRule;

            /**
             * Decodes a HttpRule message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns HttpRule
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.HttpRule;

            /**
             * Verifies a HttpRule message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a HttpRule message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns HttpRule
             */
            public static fromObject(object: { [k: string]: any }): google.api.HttpRule;

            /**
             * Creates a plain object from a HttpRule message. Also converts values to other types if specified.
             * @param message HttpRule
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.HttpRule, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this HttpRule to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CustomHttpPattern. */
        interface ICustomHttpPattern {

            /** CustomHttpPattern kind */
            kind?: (string|null);

            /** CustomHttpPattern path */
            path?: (string|null);
        }

        /** Represents a CustomHttpPattern. */
        class CustomHttpPattern implements ICustomHttpPattern {

            /**
             * Constructs a new CustomHttpPattern.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.api.ICustomHttpPattern);

            /** CustomHttpPattern kind. */
            public kind: string;

            /** CustomHttpPattern path. */
            public path: string;

            /**
             * Creates a new CustomHttpPattern instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CustomHttpPattern instance
             */
            public static create(properties?: google.api.ICustomHttpPattern): google.api.CustomHttpPattern;

            /**
             * Encodes the specified CustomHttpPattern message. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CustomHttpPattern message, length delimited. Does not implicitly {@link google.api.CustomHttpPattern.verify|verify} messages.
             * @param message CustomHttpPattern message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.api.ICustomHttpPattern, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.api.CustomHttpPattern;

            /**
             * Decodes a CustomHttpPattern message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CustomHttpPattern
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.api.CustomHttpPattern;

            /**
             * Verifies a CustomHttpPattern message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CustomHttpPattern message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CustomHttpPattern
             */
            public static fromObject(object: { [k: string]: any }): google.api.CustomHttpPattern;

            /**
             * Creates a plain object from a CustomHttpPattern message. Also converts values to other types if specified.
             * @param message CustomHttpPattern
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.api.CustomHttpPattern, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CustomHttpPattern to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of a FileDescriptorSet. */
        interface IFileDescriptorSet {

            /** FileDescriptorSet file */
            file?: (google.protobuf.IFileDescriptorProto[]|null);
        }

        /** Represents a FileDescriptorSet. */
        class FileDescriptorSet implements IFileDescriptorSet {

            /**
             * Constructs a new FileDescriptorSet.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorSet);

            /** FileDescriptorSet file. */
            public file: google.protobuf.IFileDescriptorProto[];

            /**
             * Creates a new FileDescriptorSet instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorSet instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorSet): google.protobuf.FileDescriptorSet;

            /**
             * Encodes the specified FileDescriptorSet message. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorSet message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorSet.verify|verify} messages.
             * @param message FileDescriptorSet message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorSet, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorSet;

            /**
             * Decodes a FileDescriptorSet message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorSet
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorSet;

            /**
             * Verifies a FileDescriptorSet message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorSet message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorSet
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorSet;

            /**
             * Creates a plain object from a FileDescriptorSet message. Also converts values to other types if specified.
             * @param message FileDescriptorSet
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorSet, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorSet to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileDescriptorProto. */
        interface IFileDescriptorProto {

            /** FileDescriptorProto name */
            name?: (string|null);

            /** FileDescriptorProto package */
            "package"?: (string|null);

            /** FileDescriptorProto dependency */
            dependency?: (string[]|null);

            /** FileDescriptorProto publicDependency */
            publicDependency?: (number[]|null);

            /** FileDescriptorProto weakDependency */
            weakDependency?: (number[]|null);

            /** FileDescriptorProto messageType */
            messageType?: (google.protobuf.IDescriptorProto[]|null);

            /** FileDescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** FileDescriptorProto service */
            service?: (google.protobuf.IServiceDescriptorProto[]|null);

            /** FileDescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** FileDescriptorProto options */
            options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo */
            sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax */
            syntax?: (string|null);
        }

        /** Represents a FileDescriptorProto. */
        class FileDescriptorProto implements IFileDescriptorProto {

            /**
             * Constructs a new FileDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileDescriptorProto);

            /** FileDescriptorProto name. */
            public name: string;

            /** FileDescriptorProto package. */
            public package: string;

            /** FileDescriptorProto dependency. */
            public dependency: string[];

            /** FileDescriptorProto publicDependency. */
            public publicDependency: number[];

            /** FileDescriptorProto weakDependency. */
            public weakDependency: number[];

            /** FileDescriptorProto messageType. */
            public messageType: google.protobuf.IDescriptorProto[];

            /** FileDescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** FileDescriptorProto service. */
            public service: google.protobuf.IServiceDescriptorProto[];

            /** FileDescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** FileDescriptorProto options. */
            public options?: (google.protobuf.IFileOptions|null);

            /** FileDescriptorProto sourceCodeInfo. */
            public sourceCodeInfo?: (google.protobuf.ISourceCodeInfo|null);

            /** FileDescriptorProto syntax. */
            public syntax: string;

            /**
             * Creates a new FileDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFileDescriptorProto): google.protobuf.FileDescriptorProto;

            /**
             * Encodes the specified FileDescriptorProto message. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FileDescriptorProto.verify|verify} messages.
             * @param message FileDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileDescriptorProto;

            /**
             * Decodes a FileDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileDescriptorProto;

            /**
             * Verifies a FileDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileDescriptorProto;

            /**
             * Creates a plain object from a FileDescriptorProto message. Also converts values to other types if specified.
             * @param message FileDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DescriptorProto. */
        interface IDescriptorProto {

            /** DescriptorProto name */
            name?: (string|null);

            /** DescriptorProto field */
            field?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto extension */
            extension?: (google.protobuf.IFieldDescriptorProto[]|null);

            /** DescriptorProto nestedType */
            nestedType?: (google.protobuf.IDescriptorProto[]|null);

            /** DescriptorProto enumType */
            enumType?: (google.protobuf.IEnumDescriptorProto[]|null);

            /** DescriptorProto extensionRange */
            extensionRange?: (google.protobuf.DescriptorProto.IExtensionRange[]|null);

            /** DescriptorProto oneofDecl */
            oneofDecl?: (google.protobuf.IOneofDescriptorProto[]|null);

            /** DescriptorProto options */
            options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange */
            reservedRange?: (google.protobuf.DescriptorProto.IReservedRange[]|null);

            /** DescriptorProto reservedName */
            reservedName?: (string[]|null);
        }

        /** Represents a DescriptorProto. */
        class DescriptorProto implements IDescriptorProto {

            /**
             * Constructs a new DescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDescriptorProto);

            /** DescriptorProto name. */
            public name: string;

            /** DescriptorProto field. */
            public field: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto extension. */
            public extension: google.protobuf.IFieldDescriptorProto[];

            /** DescriptorProto nestedType. */
            public nestedType: google.protobuf.IDescriptorProto[];

            /** DescriptorProto enumType. */
            public enumType: google.protobuf.IEnumDescriptorProto[];

            /** DescriptorProto extensionRange. */
            public extensionRange: google.protobuf.DescriptorProto.IExtensionRange[];

            /** DescriptorProto oneofDecl. */
            public oneofDecl: google.protobuf.IOneofDescriptorProto[];

            /** DescriptorProto options. */
            public options?: (google.protobuf.IMessageOptions|null);

            /** DescriptorProto reservedRange. */
            public reservedRange: google.protobuf.DescriptorProto.IReservedRange[];

            /** DescriptorProto reservedName. */
            public reservedName: string[];

            /**
             * Creates a new DescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DescriptorProto instance
             */
            public static create(properties?: google.protobuf.IDescriptorProto): google.protobuf.DescriptorProto;

            /**
             * Encodes the specified DescriptorProto message. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.verify|verify} messages.
             * @param message DescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto;

            /**
             * Decodes a DescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto;

            /**
             * Verifies a DescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto;

            /**
             * Creates a plain object from a DescriptorProto message. Also converts values to other types if specified.
             * @param message DescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace DescriptorProto {

            /** Properties of an ExtensionRange. */
            interface IExtensionRange {

                /** ExtensionRange start */
                start?: (number|null);

                /** ExtensionRange end */
                end?: (number|null);
            }

            /** Represents an ExtensionRange. */
            class ExtensionRange implements IExtensionRange {

                /**
                 * Constructs a new ExtensionRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IExtensionRange);

                /** ExtensionRange start. */
                public start: number;

                /** ExtensionRange end. */
                public end: number;

                /**
                 * Creates a new ExtensionRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ExtensionRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IExtensionRange): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Encodes the specified ExtensionRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ExtensionRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ExtensionRange.verify|verify} messages.
                 * @param message ExtensionRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IExtensionRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Decodes an ExtensionRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ExtensionRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Verifies an ExtensionRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an ExtensionRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ExtensionRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ExtensionRange;

                /**
                 * Creates a plain object from an ExtensionRange message. Also converts values to other types if specified.
                 * @param message ExtensionRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ExtensionRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ExtensionRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a ReservedRange. */
            interface IReservedRange {

                /** ReservedRange start */
                start?: (number|null);

                /** ReservedRange end */
                end?: (number|null);
            }

            /** Represents a ReservedRange. */
            class ReservedRange implements IReservedRange {

                /**
                 * Constructs a new ReservedRange.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.DescriptorProto.IReservedRange);

                /** ReservedRange start. */
                public start: number;

                /** ReservedRange end. */
                public end: number;

                /**
                 * Creates a new ReservedRange instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ReservedRange instance
                 */
                public static create(properties?: google.protobuf.DescriptorProto.IReservedRange): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Encodes the specified ReservedRange message. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ReservedRange message, length delimited. Does not implicitly {@link google.protobuf.DescriptorProto.ReservedRange.verify|verify} messages.
                 * @param message ReservedRange message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.DescriptorProto.IReservedRange, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Decodes a ReservedRange message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ReservedRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Verifies a ReservedRange message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ReservedRange message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ReservedRange
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.DescriptorProto.ReservedRange;

                /**
                 * Creates a plain object from a ReservedRange message. Also converts values to other types if specified.
                 * @param message ReservedRange
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.DescriptorProto.ReservedRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ReservedRange to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a FieldDescriptorProto. */
        interface IFieldDescriptorProto {

            /** FieldDescriptorProto name */
            name?: (string|null);

            /** FieldDescriptorProto number */
            number?: (number|null);

            /** FieldDescriptorProto label */
            label?: (google.protobuf.FieldDescriptorProto.Label|null);

            /** FieldDescriptorProto type */
            type?: (google.protobuf.FieldDescriptorProto.Type|null);

            /** FieldDescriptorProto typeName */
            typeName?: (string|null);

            /** FieldDescriptorProto extendee */
            extendee?: (string|null);

            /** FieldDescriptorProto defaultValue */
            defaultValue?: (string|null);

            /** FieldDescriptorProto oneofIndex */
            oneofIndex?: (number|null);

            /** FieldDescriptorProto jsonName */
            jsonName?: (string|null);

            /** FieldDescriptorProto options */
            options?: (google.protobuf.IFieldOptions|null);
        }

        /** Represents a FieldDescriptorProto. */
        class FieldDescriptorProto implements IFieldDescriptorProto {

            /**
             * Constructs a new FieldDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldDescriptorProto);

            /** FieldDescriptorProto name. */
            public name: string;

            /** FieldDescriptorProto number. */
            public number: number;

            /** FieldDescriptorProto label. */
            public label: google.protobuf.FieldDescriptorProto.Label;

            /** FieldDescriptorProto type. */
            public type: google.protobuf.FieldDescriptorProto.Type;

            /** FieldDescriptorProto typeName. */
            public typeName: string;

            /** FieldDescriptorProto extendee. */
            public extendee: string;

            /** FieldDescriptorProto defaultValue. */
            public defaultValue: string;

            /** FieldDescriptorProto oneofIndex. */
            public oneofIndex: number;

            /** FieldDescriptorProto jsonName. */
            public jsonName: string;

            /** FieldDescriptorProto options. */
            public options?: (google.protobuf.IFieldOptions|null);

            /**
             * Creates a new FieldDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IFieldDescriptorProto): google.protobuf.FieldDescriptorProto;

            /**
             * Encodes the specified FieldDescriptorProto message. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.FieldDescriptorProto.verify|verify} messages.
             * @param message FieldDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldDescriptorProto;

            /**
             * Decodes a FieldDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldDescriptorProto;

            /**
             * Verifies a FieldDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldDescriptorProto;

            /**
             * Creates a plain object from a FieldDescriptorProto message. Also converts values to other types if specified.
             * @param message FieldDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldDescriptorProto {

            /** Type enum. */
            enum Type {
                TYPE_DOUBLE = 1,
                TYPE_FLOAT = 2,
                TYPE_INT64 = 3,
                TYPE_UINT64 = 4,
                TYPE_INT32 = 5,
                TYPE_FIXED64 = 6,
                TYPE_FIXED32 = 7,
                TYPE_BOOL = 8,
                TYPE_STRING = 9,
                TYPE_GROUP = 10,
                TYPE_MESSAGE = 11,
                TYPE_BYTES = 12,
                TYPE_UINT32 = 13,
                TYPE_ENUM = 14,
                TYPE_SFIXED32 = 15,
                TYPE_SFIXED64 = 16,
                TYPE_SINT32 = 17,
                TYPE_SINT64 = 18
            }

            /** Label enum. */
            enum Label {
                LABEL_OPTIONAL = 1,
                LABEL_REQUIRED = 2,
                LABEL_REPEATED = 3
            }
        }

        /** Properties of an OneofDescriptorProto. */
        interface IOneofDescriptorProto {

            /** OneofDescriptorProto name */
            name?: (string|null);

            /** OneofDescriptorProto options */
            options?: (google.protobuf.IOneofOptions|null);
        }

        /** Represents an OneofDescriptorProto. */
        class OneofDescriptorProto implements IOneofDescriptorProto {

            /**
             * Constructs a new OneofDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofDescriptorProto);

            /** OneofDescriptorProto name. */
            public name: string;

            /** OneofDescriptorProto options. */
            public options?: (google.protobuf.IOneofOptions|null);

            /**
             * Creates a new OneofDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IOneofDescriptorProto): google.protobuf.OneofDescriptorProto;

            /**
             * Encodes the specified OneofDescriptorProto message. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.OneofDescriptorProto.verify|verify} messages.
             * @param message OneofDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofDescriptorProto;

            /**
             * Decodes an OneofDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofDescriptorProto;

            /**
             * Verifies an OneofDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofDescriptorProto;

            /**
             * Creates a plain object from an OneofDescriptorProto message. Also converts values to other types if specified.
             * @param message OneofDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumDescriptorProto. */
        interface IEnumDescriptorProto {

            /** EnumDescriptorProto name */
            name?: (string|null);

            /** EnumDescriptorProto value */
            value?: (google.protobuf.IEnumValueDescriptorProto[]|null);

            /** EnumDescriptorProto options */
            options?: (google.protobuf.IEnumOptions|null);
        }

        /** Represents an EnumDescriptorProto. */
        class EnumDescriptorProto implements IEnumDescriptorProto {

            /**
             * Constructs a new EnumDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumDescriptorProto);

            /** EnumDescriptorProto name. */
            public name: string;

            /** EnumDescriptorProto value. */
            public value: google.protobuf.IEnumValueDescriptorProto[];

            /** EnumDescriptorProto options. */
            public options?: (google.protobuf.IEnumOptions|null);

            /**
             * Creates a new EnumDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumDescriptorProto): google.protobuf.EnumDescriptorProto;

            /**
             * Encodes the specified EnumDescriptorProto message. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumDescriptorProto.verify|verify} messages.
             * @param message EnumDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumDescriptorProto;

            /**
             * Decodes an EnumDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumDescriptorProto;

            /**
             * Verifies an EnumDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumDescriptorProto;

            /**
             * Creates a plain object from an EnumDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueDescriptorProto. */
        interface IEnumValueDescriptorProto {

            /** EnumValueDescriptorProto name */
            name?: (string|null);

            /** EnumValueDescriptorProto number */
            number?: (number|null);

            /** EnumValueDescriptorProto options */
            options?: (google.protobuf.IEnumValueOptions|null);
        }

        /** Represents an EnumValueDescriptorProto. */
        class EnumValueDescriptorProto implements IEnumValueDescriptorProto {

            /**
             * Constructs a new EnumValueDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueDescriptorProto);

            /** EnumValueDescriptorProto name. */
            public name: string;

            /** EnumValueDescriptorProto number. */
            public number: number;

            /** EnumValueDescriptorProto options. */
            public options?: (google.protobuf.IEnumValueOptions|null);

            /**
             * Creates a new EnumValueDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IEnumValueDescriptorProto): google.protobuf.EnumValueDescriptorProto;

            /**
             * Encodes the specified EnumValueDescriptorProto message. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.EnumValueDescriptorProto.verify|verify} messages.
             * @param message EnumValueDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueDescriptorProto;

            /**
             * Decodes an EnumValueDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueDescriptorProto;

            /**
             * Verifies an EnumValueDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueDescriptorProto;

            /**
             * Creates a plain object from an EnumValueDescriptorProto message. Also converts values to other types if specified.
             * @param message EnumValueDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceDescriptorProto. */
        interface IServiceDescriptorProto {

            /** ServiceDescriptorProto name */
            name?: (string|null);

            /** ServiceDescriptorProto method */
            method?: (google.protobuf.IMethodDescriptorProto[]|null);

            /** ServiceDescriptorProto options */
            options?: (google.protobuf.IServiceOptions|null);
        }

        /** Represents a ServiceDescriptorProto. */
        class ServiceDescriptorProto implements IServiceDescriptorProto {

            /**
             * Constructs a new ServiceDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceDescriptorProto);

            /** ServiceDescriptorProto name. */
            public name: string;

            /** ServiceDescriptorProto method. */
            public method: google.protobuf.IMethodDescriptorProto[];

            /** ServiceDescriptorProto options. */
            public options?: (google.protobuf.IServiceOptions|null);

            /**
             * Creates a new ServiceDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IServiceDescriptorProto): google.protobuf.ServiceDescriptorProto;

            /**
             * Encodes the specified ServiceDescriptorProto message. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.ServiceDescriptorProto.verify|verify} messages.
             * @param message ServiceDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceDescriptorProto;

            /**
             * Decodes a ServiceDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceDescriptorProto;

            /**
             * Verifies a ServiceDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceDescriptorProto;

            /**
             * Creates a plain object from a ServiceDescriptorProto message. Also converts values to other types if specified.
             * @param message ServiceDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodDescriptorProto. */
        interface IMethodDescriptorProto {

            /** MethodDescriptorProto name */
            name?: (string|null);

            /** MethodDescriptorProto inputType */
            inputType?: (string|null);

            /** MethodDescriptorProto outputType */
            outputType?: (string|null);

            /** MethodDescriptorProto options */
            options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming */
            clientStreaming?: (boolean|null);

            /** MethodDescriptorProto serverStreaming */
            serverStreaming?: (boolean|null);
        }

        /** Represents a MethodDescriptorProto. */
        class MethodDescriptorProto implements IMethodDescriptorProto {

            /**
             * Constructs a new MethodDescriptorProto.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodDescriptorProto);

            /** MethodDescriptorProto name. */
            public name: string;

            /** MethodDescriptorProto inputType. */
            public inputType: string;

            /** MethodDescriptorProto outputType. */
            public outputType: string;

            /** MethodDescriptorProto options. */
            public options?: (google.protobuf.IMethodOptions|null);

            /** MethodDescriptorProto clientStreaming. */
            public clientStreaming: boolean;

            /** MethodDescriptorProto serverStreaming. */
            public serverStreaming: boolean;

            /**
             * Creates a new MethodDescriptorProto instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodDescriptorProto instance
             */
            public static create(properties?: google.protobuf.IMethodDescriptorProto): google.protobuf.MethodDescriptorProto;

            /**
             * Encodes the specified MethodDescriptorProto message. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodDescriptorProto message, length delimited. Does not implicitly {@link google.protobuf.MethodDescriptorProto.verify|verify} messages.
             * @param message MethodDescriptorProto message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodDescriptorProto, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodDescriptorProto;

            /**
             * Decodes a MethodDescriptorProto message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodDescriptorProto
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodDescriptorProto;

            /**
             * Verifies a MethodDescriptorProto message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodDescriptorProto message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodDescriptorProto
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodDescriptorProto;

            /**
             * Creates a plain object from a MethodDescriptorProto message. Also converts values to other types if specified.
             * @param message MethodDescriptorProto
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodDescriptorProto, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodDescriptorProto to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FileOptions. */
        interface IFileOptions {

            /** FileOptions javaPackage */
            javaPackage?: (string|null);

            /** FileOptions javaOuterClassname */
            javaOuterClassname?: (string|null);

            /** FileOptions javaMultipleFiles */
            javaMultipleFiles?: (boolean|null);

            /** FileOptions javaGenerateEqualsAndHash */
            javaGenerateEqualsAndHash?: (boolean|null);

            /** FileOptions javaStringCheckUtf8 */
            javaStringCheckUtf8?: (boolean|null);

            /** FileOptions optimizeFor */
            optimizeFor?: (google.protobuf.FileOptions.OptimizeMode|null);

            /** FileOptions goPackage */
            goPackage?: (string|null);

            /** FileOptions ccGenericServices */
            ccGenericServices?: (boolean|null);

            /** FileOptions javaGenericServices */
            javaGenericServices?: (boolean|null);

            /** FileOptions pyGenericServices */
            pyGenericServices?: (boolean|null);

            /** FileOptions deprecated */
            deprecated?: (boolean|null);

            /** FileOptions ccEnableArenas */
            ccEnableArenas?: (boolean|null);

            /** FileOptions objcClassPrefix */
            objcClassPrefix?: (string|null);

            /** FileOptions csharpNamespace */
            csharpNamespace?: (string|null);

            /** FileOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FileOptions. */
        class FileOptions implements IFileOptions {

            /**
             * Constructs a new FileOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFileOptions);

            /** FileOptions javaPackage. */
            public javaPackage: string;

            /** FileOptions javaOuterClassname. */
            public javaOuterClassname: string;

            /** FileOptions javaMultipleFiles. */
            public javaMultipleFiles: boolean;

            /** FileOptions javaGenerateEqualsAndHash. */
            public javaGenerateEqualsAndHash: boolean;

            /** FileOptions javaStringCheckUtf8. */
            public javaStringCheckUtf8: boolean;

            /** FileOptions optimizeFor. */
            public optimizeFor: google.protobuf.FileOptions.OptimizeMode;

            /** FileOptions goPackage. */
            public goPackage: string;

            /** FileOptions ccGenericServices. */
            public ccGenericServices: boolean;

            /** FileOptions javaGenericServices. */
            public javaGenericServices: boolean;

            /** FileOptions pyGenericServices. */
            public pyGenericServices: boolean;

            /** FileOptions deprecated. */
            public deprecated: boolean;

            /** FileOptions ccEnableArenas. */
            public ccEnableArenas: boolean;

            /** FileOptions objcClassPrefix. */
            public objcClassPrefix: string;

            /** FileOptions csharpNamespace. */
            public csharpNamespace: string;

            /** FileOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FileOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FileOptions instance
             */
            public static create(properties?: google.protobuf.IFileOptions): google.protobuf.FileOptions;

            /**
             * Encodes the specified FileOptions message. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FileOptions message, length delimited. Does not implicitly {@link google.protobuf.FileOptions.verify|verify} messages.
             * @param message FileOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFileOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FileOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FileOptions;

            /**
             * Decodes a FileOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FileOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FileOptions;

            /**
             * Verifies a FileOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FileOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FileOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FileOptions;

            /**
             * Creates a plain object from a FileOptions message. Also converts values to other types if specified.
             * @param message FileOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FileOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FileOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FileOptions {

            /** OptimizeMode enum. */
            enum OptimizeMode {
                SPEED = 1,
                CODE_SIZE = 2,
                LITE_RUNTIME = 3
            }
        }

        /** Properties of a MessageOptions. */
        interface IMessageOptions {

            /** MessageOptions messageSetWireFormat */
            messageSetWireFormat?: (boolean|null);

            /** MessageOptions noStandardDescriptorAccessor */
            noStandardDescriptorAccessor?: (boolean|null);

            /** MessageOptions deprecated */
            deprecated?: (boolean|null);

            /** MessageOptions mapEntry */
            mapEntry?: (boolean|null);

            /** MessageOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a MessageOptions. */
        class MessageOptions implements IMessageOptions {

            /**
             * Constructs a new MessageOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMessageOptions);

            /** MessageOptions messageSetWireFormat. */
            public messageSetWireFormat: boolean;

            /** MessageOptions noStandardDescriptorAccessor. */
            public noStandardDescriptorAccessor: boolean;

            /** MessageOptions deprecated. */
            public deprecated: boolean;

            /** MessageOptions mapEntry. */
            public mapEntry: boolean;

            /** MessageOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MessageOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MessageOptions instance
             */
            public static create(properties?: google.protobuf.IMessageOptions): google.protobuf.MessageOptions;

            /**
             * Encodes the specified MessageOptions message. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MessageOptions message, length delimited. Does not implicitly {@link google.protobuf.MessageOptions.verify|verify} messages.
             * @param message MessageOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMessageOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MessageOptions;

            /**
             * Decodes a MessageOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MessageOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MessageOptions;

            /**
             * Verifies a MessageOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MessageOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MessageOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MessageOptions;

            /**
             * Creates a plain object from a MessageOptions message. Also converts values to other types if specified.
             * @param message MessageOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MessageOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MessageOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FieldOptions. */
        interface IFieldOptions {

            /** FieldOptions ctype */
            ctype?: (google.protobuf.FieldOptions.CType|null);

            /** FieldOptions packed */
            packed?: (boolean|null);

            /** FieldOptions jstype */
            jstype?: (google.protobuf.FieldOptions.JSType|null);

            /** FieldOptions lazy */
            lazy?: (boolean|null);

            /** FieldOptions deprecated */
            deprecated?: (boolean|null);

            /** FieldOptions weak */
            weak?: (boolean|null);

            /** FieldOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a FieldOptions. */
        class FieldOptions implements IFieldOptions {

            /**
             * Constructs a new FieldOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFieldOptions);

            /** FieldOptions ctype. */
            public ctype: google.protobuf.FieldOptions.CType;

            /** FieldOptions packed. */
            public packed: boolean;

            /** FieldOptions jstype. */
            public jstype: google.protobuf.FieldOptions.JSType;

            /** FieldOptions lazy. */
            public lazy: boolean;

            /** FieldOptions deprecated. */
            public deprecated: boolean;

            /** FieldOptions weak. */
            public weak: boolean;

            /** FieldOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new FieldOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FieldOptions instance
             */
            public static create(properties?: google.protobuf.IFieldOptions): google.protobuf.FieldOptions;

            /**
             * Encodes the specified FieldOptions message. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FieldOptions message, length delimited. Does not implicitly {@link google.protobuf.FieldOptions.verify|verify} messages.
             * @param message FieldOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFieldOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FieldOptions;

            /**
             * Decodes a FieldOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FieldOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FieldOptions;

            /**
             * Verifies a FieldOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FieldOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FieldOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FieldOptions;

            /**
             * Creates a plain object from a FieldOptions message. Also converts values to other types if specified.
             * @param message FieldOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FieldOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FieldOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace FieldOptions {

            /** CType enum. */
            enum CType {
                STRING = 0,
                CORD = 1,
                STRING_PIECE = 2
            }

            /** JSType enum. */
            enum JSType {
                JS_NORMAL = 0,
                JS_STRING = 1,
                JS_NUMBER = 2
            }
        }

        /** Properties of an OneofOptions. */
        interface IOneofOptions {

            /** OneofOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an OneofOptions. */
        class OneofOptions implements IOneofOptions {

            /**
             * Constructs a new OneofOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IOneofOptions);

            /** OneofOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new OneofOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns OneofOptions instance
             */
            public static create(properties?: google.protobuf.IOneofOptions): google.protobuf.OneofOptions;

            /**
             * Encodes the specified OneofOptions message. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified OneofOptions message, length delimited. Does not implicitly {@link google.protobuf.OneofOptions.verify|verify} messages.
             * @param message OneofOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IOneofOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.OneofOptions;

            /**
             * Decodes an OneofOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns OneofOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.OneofOptions;

            /**
             * Verifies an OneofOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an OneofOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns OneofOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.OneofOptions;

            /**
             * Creates a plain object from an OneofOptions message. Also converts values to other types if specified.
             * @param message OneofOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.OneofOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this OneofOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumOptions. */
        interface IEnumOptions {

            /** EnumOptions allowAlias */
            allowAlias?: (boolean|null);

            /** EnumOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumOptions. */
        class EnumOptions implements IEnumOptions {

            /**
             * Constructs a new EnumOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumOptions);

            /** EnumOptions allowAlias. */
            public allowAlias: boolean;

            /** EnumOptions deprecated. */
            public deprecated: boolean;

            /** EnumOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumOptions instance
             */
            public static create(properties?: google.protobuf.IEnumOptions): google.protobuf.EnumOptions;

            /**
             * Encodes the specified EnumOptions message. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumOptions.verify|verify} messages.
             * @param message EnumOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumOptions;

            /**
             * Decodes an EnumOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumOptions;

            /**
             * Verifies an EnumOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumOptions;

            /**
             * Creates a plain object from an EnumOptions message. Also converts values to other types if specified.
             * @param message EnumOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an EnumValueOptions. */
        interface IEnumValueOptions {

            /** EnumValueOptions deprecated */
            deprecated?: (boolean|null);

            /** EnumValueOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents an EnumValueOptions. */
        class EnumValueOptions implements IEnumValueOptions {

            /**
             * Constructs a new EnumValueOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEnumValueOptions);

            /** EnumValueOptions deprecated. */
            public deprecated: boolean;

            /** EnumValueOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new EnumValueOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns EnumValueOptions instance
             */
            public static create(properties?: google.protobuf.IEnumValueOptions): google.protobuf.EnumValueOptions;

            /**
             * Encodes the specified EnumValueOptions message. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified EnumValueOptions message, length delimited. Does not implicitly {@link google.protobuf.EnumValueOptions.verify|verify} messages.
             * @param message EnumValueOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEnumValueOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.EnumValueOptions;

            /**
             * Decodes an EnumValueOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns EnumValueOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.EnumValueOptions;

            /**
             * Verifies an EnumValueOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an EnumValueOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns EnumValueOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.EnumValueOptions;

            /**
             * Creates a plain object from an EnumValueOptions message. Also converts values to other types if specified.
             * @param message EnumValueOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.EnumValueOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this EnumValueOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a ServiceOptions. */
        interface IServiceOptions {

            /** ServiceOptions deprecated */
            deprecated?: (boolean|null);

            /** ServiceOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);
        }

        /** Represents a ServiceOptions. */
        class ServiceOptions implements IServiceOptions {

            /**
             * Constructs a new ServiceOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IServiceOptions);

            /** ServiceOptions deprecated. */
            public deprecated: boolean;

            /** ServiceOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new ServiceOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns ServiceOptions instance
             */
            public static create(properties?: google.protobuf.IServiceOptions): google.protobuf.ServiceOptions;

            /**
             * Encodes the specified ServiceOptions message. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified ServiceOptions message, length delimited. Does not implicitly {@link google.protobuf.ServiceOptions.verify|verify} messages.
             * @param message ServiceOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IServiceOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.ServiceOptions;

            /**
             * Decodes a ServiceOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns ServiceOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.ServiceOptions;

            /**
             * Verifies a ServiceOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a ServiceOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns ServiceOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.ServiceOptions;

            /**
             * Creates a plain object from a ServiceOptions message. Also converts values to other types if specified.
             * @param message ServiceOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.ServiceOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this ServiceOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a MethodOptions. */
        interface IMethodOptions {

            /** MethodOptions deprecated */
            deprecated?: (boolean|null);

            /** MethodOptions uninterpretedOption */
            uninterpretedOption?: (google.protobuf.IUninterpretedOption[]|null);

            /** MethodOptions .google.api.http */
            ".google.api.http"?: (google.api.IHttpRule|null);
        }

        /** Represents a MethodOptions. */
        class MethodOptions implements IMethodOptions {

            /**
             * Constructs a new MethodOptions.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IMethodOptions);

            /** MethodOptions deprecated. */
            public deprecated: boolean;

            /** MethodOptions uninterpretedOption. */
            public uninterpretedOption: google.protobuf.IUninterpretedOption[];

            /**
             * Creates a new MethodOptions instance using the specified properties.
             * @param [properties] Properties to set
             * @returns MethodOptions instance
             */
            public static create(properties?: google.protobuf.IMethodOptions): google.protobuf.MethodOptions;

            /**
             * Encodes the specified MethodOptions message. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified MethodOptions message, length delimited. Does not implicitly {@link google.protobuf.MethodOptions.verify|verify} messages.
             * @param message MethodOptions message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IMethodOptions, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.MethodOptions;

            /**
             * Decodes a MethodOptions message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns MethodOptions
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.MethodOptions;

            /**
             * Verifies a MethodOptions message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a MethodOptions message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns MethodOptions
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.MethodOptions;

            /**
             * Creates a plain object from a MethodOptions message. Also converts values to other types if specified.
             * @param message MethodOptions
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.MethodOptions, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this MethodOptions to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an UninterpretedOption. */
        interface IUninterpretedOption {

            /** UninterpretedOption name */
            name?: (google.protobuf.UninterpretedOption.INamePart[]|null);

            /** UninterpretedOption identifierValue */
            identifierValue?: (string|null);

            /** UninterpretedOption positiveIntValue */
            positiveIntValue?: (number|Long|null);

            /** UninterpretedOption negativeIntValue */
            negativeIntValue?: (number|Long|null);

            /** UninterpretedOption doubleValue */
            doubleValue?: (number|null);

            /** UninterpretedOption stringValue */
            stringValue?: (Uint8Array|null);

            /** UninterpretedOption aggregateValue */
            aggregateValue?: (string|null);
        }

        /** Represents an UninterpretedOption. */
        class UninterpretedOption implements IUninterpretedOption {

            /**
             * Constructs a new UninterpretedOption.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUninterpretedOption);

            /** UninterpretedOption name. */
            public name: google.protobuf.UninterpretedOption.INamePart[];

            /** UninterpretedOption identifierValue. */
            public identifierValue: string;

            /** UninterpretedOption positiveIntValue. */
            public positiveIntValue: (number|Long);

            /** UninterpretedOption negativeIntValue. */
            public negativeIntValue: (number|Long);

            /** UninterpretedOption doubleValue. */
            public doubleValue: number;

            /** UninterpretedOption stringValue. */
            public stringValue: Uint8Array;

            /** UninterpretedOption aggregateValue. */
            public aggregateValue: string;

            /**
             * Creates a new UninterpretedOption instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UninterpretedOption instance
             */
            public static create(properties?: google.protobuf.IUninterpretedOption): google.protobuf.UninterpretedOption;

            /**
             * Encodes the specified UninterpretedOption message. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UninterpretedOption message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.verify|verify} messages.
             * @param message UninterpretedOption message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUninterpretedOption, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption;

            /**
             * Decodes an UninterpretedOption message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UninterpretedOption
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption;

            /**
             * Verifies an UninterpretedOption message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an UninterpretedOption message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UninterpretedOption
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption;

            /**
             * Creates a plain object from an UninterpretedOption message. Also converts values to other types if specified.
             * @param message UninterpretedOption
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UninterpretedOption, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UninterpretedOption to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace UninterpretedOption {

            /** Properties of a NamePart. */
            interface INamePart {

                /** NamePart namePart */
                namePart: string;

                /** NamePart isExtension */
                isExtension: boolean;
            }

            /** Represents a NamePart. */
            class NamePart implements INamePart {

                /**
                 * Constructs a new NamePart.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.UninterpretedOption.INamePart);

                /** NamePart namePart. */
                public namePart: string;

                /** NamePart isExtension. */
                public isExtension: boolean;

                /**
                 * Creates a new NamePart instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NamePart instance
                 */
                public static create(properties?: google.protobuf.UninterpretedOption.INamePart): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Encodes the specified NamePart message. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NamePart message, length delimited. Does not implicitly {@link google.protobuf.UninterpretedOption.NamePart.verify|verify} messages.
                 * @param message NamePart message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.UninterpretedOption.INamePart, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NamePart message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Decodes a NamePart message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NamePart
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Verifies a NamePart message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NamePart message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NamePart
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.UninterpretedOption.NamePart;

                /**
                 * Creates a plain object from a NamePart message. Also converts values to other types if specified.
                 * @param message NamePart
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.UninterpretedOption.NamePart, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NamePart to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a SourceCodeInfo. */
        interface ISourceCodeInfo {

            /** SourceCodeInfo location */
            location?: (google.protobuf.SourceCodeInfo.ILocation[]|null);
        }

        /** Represents a SourceCodeInfo. */
        class SourceCodeInfo implements ISourceCodeInfo {

            /**
             * Constructs a new SourceCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.ISourceCodeInfo);

            /** SourceCodeInfo location. */
            public location: google.protobuf.SourceCodeInfo.ILocation[];

            /**
             * Creates a new SourceCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SourceCodeInfo instance
             */
            public static create(properties?: google.protobuf.ISourceCodeInfo): google.protobuf.SourceCodeInfo;

            /**
             * Encodes the specified SourceCodeInfo message. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SourceCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.verify|verify} messages.
             * @param message SourceCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.ISourceCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo;

            /**
             * Decodes a SourceCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SourceCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo;

            /**
             * Verifies a SourceCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SourceCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SourceCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo;

            /**
             * Creates a plain object from a SourceCodeInfo message. Also converts values to other types if specified.
             * @param message SourceCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.SourceCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SourceCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace SourceCodeInfo {

            /** Properties of a Location. */
            interface ILocation {

                /** Location path */
                path?: (number[]|null);

                /** Location span */
                span?: (number[]|null);

                /** Location leadingComments */
                leadingComments?: (string|null);

                /** Location trailingComments */
                trailingComments?: (string|null);

                /** Location leadingDetachedComments */
                leadingDetachedComments?: (string[]|null);
            }

            /** Represents a Location. */
            class Location implements ILocation {

                /**
                 * Constructs a new Location.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.SourceCodeInfo.ILocation);

                /** Location path. */
                public path: number[];

                /** Location span. */
                public span: number[];

                /** Location leadingComments. */
                public leadingComments: string;

                /** Location trailingComments. */
                public trailingComments: string;

                /** Location leadingDetachedComments. */
                public leadingDetachedComments: string[];

                /**
                 * Creates a new Location instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Location instance
                 */
                public static create(properties?: google.protobuf.SourceCodeInfo.ILocation): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Encodes the specified Location message. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Location message, length delimited. Does not implicitly {@link google.protobuf.SourceCodeInfo.Location.verify|verify} messages.
                 * @param message Location message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.SourceCodeInfo.ILocation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Location message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Decodes a Location message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Location
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Verifies a Location message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Location message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Location
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.SourceCodeInfo.Location;

                /**
                 * Creates a plain object from a Location message. Also converts values to other types if specified.
                 * @param message Location
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.SourceCodeInfo.Location, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Location to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }

        /** Properties of a GeneratedCodeInfo. */
        interface IGeneratedCodeInfo {

            /** GeneratedCodeInfo annotation */
            annotation?: (google.protobuf.GeneratedCodeInfo.IAnnotation[]|null);
        }

        /** Represents a GeneratedCodeInfo. */
        class GeneratedCodeInfo implements IGeneratedCodeInfo {

            /**
             * Constructs a new GeneratedCodeInfo.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IGeneratedCodeInfo);

            /** GeneratedCodeInfo annotation. */
            public annotation: google.protobuf.GeneratedCodeInfo.IAnnotation[];

            /**
             * Creates a new GeneratedCodeInfo instance using the specified properties.
             * @param [properties] Properties to set
             * @returns GeneratedCodeInfo instance
             */
            public static create(properties?: google.protobuf.IGeneratedCodeInfo): google.protobuf.GeneratedCodeInfo;

            /**
             * Encodes the specified GeneratedCodeInfo message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified GeneratedCodeInfo message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.verify|verify} messages.
             * @param message GeneratedCodeInfo message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IGeneratedCodeInfo, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo;

            /**
             * Decodes a GeneratedCodeInfo message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns GeneratedCodeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo;

            /**
             * Verifies a GeneratedCodeInfo message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a GeneratedCodeInfo message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns GeneratedCodeInfo
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo;

            /**
             * Creates a plain object from a GeneratedCodeInfo message. Also converts values to other types if specified.
             * @param message GeneratedCodeInfo
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.GeneratedCodeInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this GeneratedCodeInfo to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace GeneratedCodeInfo {

            /** Properties of an Annotation. */
            interface IAnnotation {

                /** Annotation path */
                path?: (number[]|null);

                /** Annotation sourceFile */
                sourceFile?: (string|null);

                /** Annotation begin */
                begin?: (number|null);

                /** Annotation end */
                end?: (number|null);
            }

            /** Represents an Annotation. */
            class Annotation implements IAnnotation {

                /**
                 * Constructs a new Annotation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation);

                /** Annotation path. */
                public path: number[];

                /** Annotation sourceFile. */
                public sourceFile: string;

                /** Annotation begin. */
                public begin: number;

                /** Annotation end. */
                public end: number;

                /**
                 * Creates a new Annotation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Annotation instance
                 */
                public static create(properties?: google.protobuf.GeneratedCodeInfo.IAnnotation): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Encodes the specified Annotation message. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Annotation message, length delimited. Does not implicitly {@link google.protobuf.GeneratedCodeInfo.Annotation.verify|verify} messages.
                 * @param message Annotation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: google.protobuf.GeneratedCodeInfo.IAnnotation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Annotation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Decodes an Annotation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Annotation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Verifies an Annotation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Annotation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Annotation
                 */
                public static fromObject(object: { [k: string]: any }): google.protobuf.GeneratedCodeInfo.Annotation;

                /**
                 * Creates a plain object from an Annotation message. Also converts values to other types if specified.
                 * @param message Annotation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: google.protobuf.GeneratedCodeInfo.Annotation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Annotation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}
