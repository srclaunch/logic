import { Model } from '@srclaunch/types';
import { useSearchParams } from '@srclaunch/web-application-state';

export const Panel = {
  hide: () => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.delete('edit');
    searchParams.delete('new');
    searchParams.delete('view');

    const newRelativePathQuery =
      window.location.pathname +
      (searchParams.toString().length > 0 ? `?${searchParams.toString()}` : '');

    window.history.pushState(null, '', newRelativePathQuery);
    // window.location.search = searchParams.toString();
  },
  show: ({
    edit,
    id,
    model,
  }: {
    readonly edit?: boolean;
    readonly id?: string;
    readonly model: Model['name'];
  }) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (id && edit) {
      searchParams.set('edit', `${model}/${id}`);
    } else if (id) {
      searchParams.set('view', `${model}/${id}`);
    } else {
      searchParams.set('new', model);
    }

    const newRelativePathQuery = `${
      window.location.pathname
    }?${searchParams.toString()}`;

    console.log('newRelativePathQuery', newRelativePathQuery);

    window.history.pushState(null, '', newRelativePathQuery);
    // window.location.search = searchParams.toString();
  },
};
