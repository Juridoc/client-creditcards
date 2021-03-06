/*!
 * Copyright (C) 2018-2019 Juridoc
 */
import * as Class from '@singleware/class';
import * as Types from '../types';
/**
 * Card update request.
 */
export declare class Update extends Class.Null {
    /**
     * Card status.
     */
    status?: Types.Status.Common;
    /**
     * Card description.
     */
    description?: string;
}
