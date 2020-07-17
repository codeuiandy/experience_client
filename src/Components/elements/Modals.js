import React from 'react';

export const AutoresponderEmailModal = () => (
    <div className="modal fade" id="addNewSeries" tabindex="-1" role="dialog"  aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content p-4">
                    <div className="modal-header">
                        <h5 className="modal-title" id="example-Modal3">Autoresponder name</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body pt-4 pb-4">
                        <form>
                            <div className="form-group">
                            <input type="text" className="form-control payment-input" placeholder="Autoresponder Name" />
                            </div>
                            <div className="text-right mt-3">
                                <button className="btn btn-outline-primary p-2">Cancel</button>
                                <button className="btn btn-primary p-2 ml-3">Done</button>
                            </div>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
)