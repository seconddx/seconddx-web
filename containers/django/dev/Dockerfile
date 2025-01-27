# ref: https://github.com/mamba-org/micromamba-docker/blob/main/Dockerfile

FROM ghcr.io/seconddx/seconddx-web-deps:dev

LABEL maintainer="Ivan Ogasawara <ivan.ogasawara@gmail.com>"
LABEL org.opencontainers.image.title="SecondDX"
LABEL org.opencontainers.image.authors="SecondDX Team"
LABEL org.opencontainers.image.source="https://github.com/seconddx/seconddx-web"
LABEL org.opencontainers.image.version="latest"
LABEL org.opencontainers.image.description="SecondDX Web"
LABEL org.seconddx.config.version="latest"

# it is the default, but using it here to have it explicitly
USER root

ENV USERNAME=seconddx

RUN mkdir -p /opt/services/seconddx-web \
    /home/${USERNAME}/.cache/huggingface/hub && \
    chmod -R a+rwx /opt/services/seconddx-web && \
    chmod -R a+rwx /home/${USERNAME}/.cache/huggingface/hub && \
    chown -R ${USERNAME}:${USERNAME} /opt/services/seconddx-web \
    /home/${USERNAME}/.cache/huggingface/hub

USER ${USERNAME}

WORKDIR /opt/services/seconddx-web

ARG HTTP_PROXY
ARG HTTPS_PROXY

ENV CONDA_PREFIX /opt/conda/envs/$ENV_NAME
ENV PATH ${CONDA_PREFIX}/bin:$PATH

ARG ENV=dev
ARG STATIC_ROOT
ARG MEDIA_ROOT

ENV STATIC_ROOT ${STATIC_ROOT}
ENV MEDIA_ROOT ${MEDIA_ROOT}

COPY --chown=${USERNAME}:${USERNAME} pyproject.toml poetry.lock /opt/services/seconddx-web/
COPY --chown=${USERNAME}:${USERNAME} containers/django/scripts/activate.sh /opt/activate.sh
COPY --chown=${USERNAME}:${USERNAME} containers/django/scripts/install-deps.sh /opt/deps/install-deps.sh

RUN mkdir -p /opt/services/seconddx-web/src/backend

RUN conda init bash \
  && source ~/.bashrc \
  && source /opt/activate.sh \
  && conda env list \
  && /opt/deps/install-deps.sh

COPY --chown=${USERNAME}:${USERNAME} src /opt/services/seconddx-web/src

WORKDIR /opt/services/seconddx-web/src/backend

ENV PYTHONPATH='/opt/services/seconddx-web/src/backend'

RUN sudo chown ${USERNAME}:${USERNAME} /opt/
COPY --chown=${USERNAME}:${USERNAME} ./containers/django/scripts/entrypoint.sh /opt/entrypoint.sh
RUN sed -i 's/\r$//g' /opt/entrypoint.sh
RUN chmod +x /opt/entrypoint.sh

COPY --chown=${USERNAME}:${USERNAME} ./containers/django/dev/start /opt/start
RUN sed -i 's/\r$//g' /opt/start
RUN chmod +x /opt/start

COPY --chown=${USERNAME}:${USERNAME} ./containers/celery/dev/worker/start /opt/start-celeryworker
COPY --chown=${USERNAME}:${USERNAME} ./containers/celery/dev/beat/start /opt/start-celerybeat
COPY --chown=${USERNAME}:${USERNAME} ./containers/celery/dev/flower/start /opt/start-flower

RUN sed -i 's/\r$//g' /opt/start-celeryworker \
  && sed -i 's/\r$//g' /opt/start-celerybeat \
  && sed -i 's/\r$//g' /opt/start-flower \
  && chmod +x /opt/start-celeryworker \
  && chmod +x /opt/start-celerybeat \
  && chmod +x /opt/start-flower

# copy application code to WORKDIR
COPY --chown=${USERNAME}:${USERNAME} . ${APP_HOME}

ENTRYPOINT ["tini", "--", "/opt/entrypoint.sh"]
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
